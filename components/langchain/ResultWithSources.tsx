import React, {  useEffect, useRef } from "react";

import {  Message } from "@/types";
import MessageItem from "./MessageItem";

type ResultWithSources = {
  messages: Message[];
  pngFile: string;
  maxMsgs?: number;
  isRetrieving?: boolean;
};

const ResultWithSources = ({ messages, pngFile, maxMsgs, isRetrieving }:ResultWithSources) => {
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
      className={`bg-white py-10 rounded-3xl shadow-lg mb-8 overflow-y-auto min-h-[600px] max-h-[600px] flex flex-col space-y-4 ${
        messages.length < maxMsgToScroll && "justify-end"
      }`}
    >
      {messages &&
        messages.map((message, index) => {
          // console.log("message", message);
          return (
            <div key={index}>
             <MessageItem message={message} pngFile={pngFile} />
              
            </div>
          )
        }
         
          
        )}
         {isRetrieving && (
                <div className={`flex justify-center`}>
                  <div className="animate-spin rounded-full h-[20px] w-[20px] border-b-2 border-gray-900"></div>
                </div>
              )} 
    
    </div>
  );
};

export default ResultWithSources;