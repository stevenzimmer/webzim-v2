import getRandomQuote from "@/lib/quotes/getRandomQuote";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const quote = await getRandomQuote();

  return NextResponse.json(quote);
}