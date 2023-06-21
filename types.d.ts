import { JSXElementConstructor, ReactElement, MouseEventHandler } from "react"

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

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}