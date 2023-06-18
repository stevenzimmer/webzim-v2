import { getPostsMeta } from "@/lib/post"
import ListItem from "./ListItem";
export default async function Posts() {

  const posts = await getPostsMeta();

  // console.log({posts});

  if(!posts) {
    return <p>Sorry no posts available</p>
  }
  
  return (
    <section className="py-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold ">
        Blog
      </h2>
      <ul className="w-full list-none">
        {posts.map((post) => (
          <li key={post.id} className="py-6 border-b last:border-transparent">
            <ListItem key={post.id} post={post} />
          </li>
        ))}
      </ul>
    </section>
  )
}
