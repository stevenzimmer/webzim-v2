"use client";

import {useChat} from "ai/react";
import MessageItem from "@/components/langchain/MessageItem";

export default function StreamingChatPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/streaming-chat",
  });


  return (
    <div className="container max-w-3xl py-12 flex flex-col justify-end">
    {messages.map(m => (
      <div key={m.id} className="py-6 bg-slate-100 px-6">
        {m.role}: {m.content}
      </div>
    ))}

    <form onSubmit={handleSubmit} className="absolute bottom-12">
      <label>
        Say something...
        <input
          value={input}
          onChange={handleInputChange}
        />
      </label>
    </form>
  </div>
  )
}
