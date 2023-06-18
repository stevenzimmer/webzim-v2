"use client";
import React, { useState } from "react";
import PageHeader from "@/components/langchain/PageHeader";
import PromptBox from "@/components/langchain/PromptBox";

import TwoColumnLayout from "@/components/langchain/TwoColumnLayout";
import ResultWithSources from "@/components/langchain/ResultWithSources";


// export const metadata = {
//   title: "Langchain Demos | WebZim",
//   description: "Demos on the latest AI capabilites on the web using Langchain.",
// };


export default function MemoryPage() {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);
  const [isRetrieving, setIsRetrieving] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I am a chat bot with an excellent memory. Please start the chat by telling me your name and also your favorite food",
      type: "bot",
    },
  ]);
  const [firstMsg, setFirstMsg] = useState(true);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmitPrompt = async () => {
    console.log("sending ", prompt);
    setIsRetrieving(true);
    setPrompt("");
    try {
      // Update the user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: prompt, type: "user", sourceDocuments: null },
      ]);

      const response = await fetch("/api/memory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt, firstMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      
      // To keep current chain
      setFirstMsg(false);

      const searchRes = await response.json();
      // Add the bot message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: searchRes.output.response, type: "bot", sourceDocuments: null },
      ]);

      // console.log({ searchRes });
      // Clear any old error messages
      setError("");
      setIsRetrieving(false);
    } catch (err) {
      console.error(err);
      setError(err);
      setIsRetrieving(false);
    }
  };

  return (
    <>
      <TwoColumnLayout
        leftChildren={
          <>
            <PageHeader
              labelEmoji="🧠"
              labelText="Memory Demo"
              heading="Test my memory"
              description="This chat interface is built with: "
              tools={["Langchain", "BufferMemory","ConversationChain", "OpenAI API"]}

            />
          </>
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} pngFile="brain" isRetrieving={isRetrieving} />
            <PromptBox
              prompt={prompt}
              
              handleSubmit={handleSubmitPrompt}
              error={error}
              handlePromptChange={handlePromptChange}
            />
          </>
        }
      />
    </>
  );
}
