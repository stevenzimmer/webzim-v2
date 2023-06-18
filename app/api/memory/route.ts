import { NextRequest, NextResponse } from "next/server";

import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";


let model;
let memory;
let chain;
export async function POST(req: NextRequest) {
    const body = await req.json();
    const { input, firstMsg } = body;

    console.log({firstMsg});
    console.log({input});


    if (!input) {
      throw new Error("No input!");
    }

    if (firstMsg) {
      console.log("initializing chain");
      model = new OpenAI({ modelName: "gpt-3.5-turbo" });
      memory = new BufferMemory();
      chain = new ConversationChain({ llm: model, memory: memory });
    }

    console.log({ input });
    const response = await chain.call({ input });
    console.log({ response });

    return NextResponse.json({
      output: response
    }, {
      status: 200
    });

}