import Link from "next/link";
import { getPostsMeta } from "@/lib/post";
import ListItem from "@/components/blog/ListItem";


export const revalidate = 86400;

type Props = {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped... "Request data where you need it"

  if(!posts ) return [];

  // return posts.map((post) => ({
  //   postId:post.id
  // }))

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({tag}));
}


export async function generateMetadata({params: {tag}}: Props) {

  return {
    title: `Posts about ${tag.replaceAll("-", " ")} | Zim Blog`
  }

}


export default async function TagPostList({ params: { tag }}: Props) {
  const posts = await getPostsMeta();

  if(!posts) return <p>Sorry, no posts with that tag</p>

  const tagPosts = posts.filter((post) => post.tags.includes(tag.replaceAll("-", " ")) );

  if(!tagPosts.length) {
    return (
      <div>
        <p>Sorry, no posts for the keyword</p>
        <Link href="/">Back to home</Link>
      </div>
    )
  }

  return (
    <>
      <h2>Blog posts with tag: {tag.replaceAll("-", " ")}</h2>
      <section>
        <ul>
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  )

}