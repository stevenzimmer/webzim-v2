import getRandomQuote from "@/lib/quotes/getRandomQuote";
import Quote from "@/components/Quote";
export const metadate = {
  title: "Quote Generator",
  description: "Generate quotes using GPT-3.",
};
export default async function QuoteGeneratorPage() {
  const quote = await getRandomQuote();
  console.log({ quote });
  return (
    <div>
      <Quote {...quote} />
    </div>
  )
}
