import { NextResponse, NextRequest } from "next/server";
import {OpenAIStream, StreamingTextResponse} from "ai";

import {Configuration, OpenAIApi} from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { messages } = body;
  console.log({messages});

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  // console.log({response});

  const stream = OpenAIStream(response, {
    // onStart: async () => {
    //   await savePromptToDatabase(prompt);
    // },
    // onToken: async (token: string) => {
    //   await saveTokenToDatabase(token);
    // },
    // onCompletion: async (completion: StreamingTextResponse) => {
    //   await saveCompletionToDatabase(completion);
    // }


  });

  // console.log({stream});

  return new StreamingTextResponse(stream);
  // return NextResponse.json({
  //   message: "Hello, world!"
  // }, {
  //   status: 200
  // });

}