import Link from "next/link";
import { getPostsMeta, getPostByName } from "@/lib/post";
import getFormattedDate from "@/lib/getFormattedDate";
import {notFound} from "next/navigation";
import "highlight.js/styles/github-dark.css";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped... "Request data where you need it"

  if(!posts ) return [];

  return posts.map((post) => ({
    postId:post.id
  }))
}

export async function generateMetadata({params: {postId}}: Props) {

  const post = await getPostByName(`${postId}.mdx`); // deduped... "Request data where you need it"

  // if(!posts) return [];

  // const post = posts.find(post => post.id === postId);

  if(!post) {
    return {
      title: "Post not found"
    }
  }
  return {
    title: `${post.meta.title} | Zim Blog`
  }

}

export default async function BlogPostPage({params: { postId }}: Props) {

  const post = await getPostByName(`${postId}.mdx`); // deduped... "Request data where you need it"

  if(!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag.replaceAll(" ", "-")}`}>{tag}</Link>
  ));

  return (
<>
      <h1>{meta.title}</h1>
      <p>
        {pubDate}
      </p>
      <article>
        {content}
      </article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">
        {tags}
        </div>
      </section>
        <p className="mb-10">
          <Link href="/">Back to home</Link>
        </p>
        
   
</>
  )
}
