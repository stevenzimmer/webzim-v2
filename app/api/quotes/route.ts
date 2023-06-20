import getAllQuotes from "@/lib/quotes/getAllQuotes";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const quotes = await getAllQuotes();

  return NextResponse.json(quotes);
}