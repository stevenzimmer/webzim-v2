"use client";
import React, { useState, useEffect } from "react";
import PageHeader from "@/components/langchain/PageHeader";
import PromptBox from "@/components/langchain/PromptBox";

import TwoColumnLayout from "@/components/langchain/TwoColumnLayout";
// import ResultStreaming from "@/components/langchain/ResultStreaming";

import {useChat} from "ai/react";

import ResultStreaming from "@/components/langchain/ResultStreaming";
import MessageItem from "@/components/langchain/MessageItem";

// export const metadata = {
//   title: "Langchain Demos | WebZim",
//   description: "Demos on the latest AI capabilites on the web using Langchain.",
// };


export default function StreamingPage() {

  const [isRetrieving, setIsRetrieving] = useState(false);


  const { messages, input, handleInputChange, handleSubmit, error } = useChat({
    api: "/api/streaming",
    
  });

  return (
    <>
      <TwoColumnLayout
        leftChildren={
          <>
            <PageHeader
              labelEmoji="💭"
              labelText="Streaming"
              heading="Spit a Rap."
              description="Nobody likes waiting for APIs to load. Use streaming to improve the user experience of chat bots. This tutorial uses streaming.  Head over to Module X to get started!"
              tools={["Langchain", "BufferMemory","ConversationChain", "OpenAI API"]}
            />
          </>
        }
        rightChildren={
          <>
              <div className="mb-12">
                {messages.map(m => {

                  return (
                    <div key={m.id} className="py-6 bg-slate-100 px-6">
                    {m.role}: {m.content}
                    </div>
                  )
                })}
              </div>
              <PromptBox
                prompt={input}
                handlePromptChange={handleInputChange}
                handleSubmit={handleSubmit}
                placeHolderText={"Enter your name and city"}
                error={error}
                pngFile="pdf"
              />
          </>
        }
      />
    </>
  );
}
