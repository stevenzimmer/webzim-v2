import { JSXElementConstructor, ReactElement } from "react"

type Meta = {
  id: string
  title: string
  date: string,
  tags: string[]
}

type BlogPost = {
  meta:Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,

}


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

type Quote = {
  quote: string;
  author: string;
  category: string;
};