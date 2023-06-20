import { connect } from "@planetscale/database";
import {db} from "@/src/db/config";
import { categories, authors, quotes } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import {Quote} from "@/types.d";

export default async function getAllQuotes(): Promise<Quote[]> {
  const results: Quote[] = await db.select({
    quote: quotes.quote,
    category: categories.category,
    author: authors.author,
  })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id));

  return results;
}
