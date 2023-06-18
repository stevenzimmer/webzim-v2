import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Document = {
  pageContent: string;
  metadata: Record<string, unknown>;
};
type Message = {
  text: string;
  type: "user" | "bot";
  sourceDocuments: Document[];
};
type MessageItem = {
  message: Message;
  pngFile: string;
  isLast: boolean;
};
const MessageItem = ({ message, pngFile, isLast }:MessageItem) => {
  const userImage = "/assets/images/langchain/green-square.png";
  const botImage = `/assets/images/langchain/${pngFile}.png`;
  const [showSources, setShowSources] = useState(false);

  return (
    <div className={`flex flex-col ${isLast ? "flex-grow" : ""}`}>
      <div className={`flex items-center mb-4 ${message.type === "user" ? "flex-row-reverse" : ""} `}>
        <div className={`rounded  h-[32px] w-[32px] relative overflow-hidden ${message.type === "user" ? "ml-4" : "mr-4"} `}>
          <Image
            src={message.type === "user" ? userImage : botImage}
            alt={`${message.type}'s profile`}
            width={32}
            height={32}
            className="rounded"
            priority
            unoptimized
          />
        </div>
        <p
          className={`${message.type === "user" ? "user" : "bot"} m-0`}
          style={{ maxWidth: "90%" }}
        >
          {message.text}
        </p>
      </div>

      {message.sourceDocuments && (
        <div className="mb-6">
          <button
            className="text-gray-600 text-sm font-bold"
            onClick={() => setShowSources(!showSources)}
          >
            Source Documents {showSources ? "(Hide)" : "(Show)"}
          </button>
          {showSources &&
            message.sourceDocuments.map((document, docIndex) => (
              <div key={docIndex}>
                <h3 className="text-gray-600 text-sm font-bold">
                  Source {docIndex + 1}:
                </h3>
                <p className="text-gray-800 text-sm mt-2">
                  {document.pageContent}
                </p>
                <pre className="text-xs text-gray-500 mt-2">
                  {JSON.stringify(document.metadata, null, 2)}
                </pre>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

type ResultWithSources = {
  messages: Message[];
  pngFile: string;
  maxMsgs?: number;
};

const ResultWithSources = ({ messages, pngFile, maxMsgs }:ResultWithSources) => {
  const messagesContainerRef = useRef();

  useEffect(() => {
    if (messagesContainerRef.current) {
      const element = messagesContainerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  // E.g. Before we reach the max messages, we should add the justify-end property, which pushes messages to the bottom
  const maxMsgToScroll = maxMsgs || 5;

  return (
    <div
      ref={messagesContainerRef}
      className={`bg-white p-10 rounded-3xl shadow-lg mb-8 overflow-y-auto h-[500px] max-h-[500px] flex flex-col space-y-4 ${
        messages.length < maxMsgToScroll && "justify-end"
      }`}
    >
      {messages &&
        messages.map((message, index) => (
          <MessageItem key={index} message={message} pngFile={pngFile} />
        ))}
    </div>
  );
};

export default ResultWithSources;