import { useState } from "react";
import Image from "next/image";
import {  MessageItem } from "@/types";


const MessageItem = ({ message, pngFile, isLast }:MessageItem) => {
  const userImage = "/assets/images/langchain/green-square.png";
  const botImage = `/assets/images/langchain/${pngFile}.png`;
  const [showSources, setShowSources] = useState(false);

  return (
    <div className={`flex flex-col ${isLast ? "flex-grow" : ""} px-10 ${message.type === "user" ? "bg-slate-100" : ""}`}>
      <div className={`flex items-center ${message.type === "user" ? "flex-row-reverse " : ""} py-4`}>
        <div className={`rounded-full h-[32px] w-[32px] relative overflow-hidden ${message.type === "user" ? "ml-4" : "mr-4"} `}>
          <Image
            src={message.type === "user" ? userImage : botImage}
            alt={`${message.type}'s profile`}
            width={32}
            height={32}
            className="rounded-full"
            priority
            unoptimized
          />
        </div>
        <p
          className={`${message.type === "user" ? "user text-right " : "bot"} m-0`}
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

export default MessageItem;