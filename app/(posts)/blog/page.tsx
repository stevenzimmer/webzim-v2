
import Posts from "@/components/blog/Posts"
export const revalidate = 86400; // revalidate this page every 60 seconds

export default function Home() {
  return (
    <div>
      {/* {@ts-expect-error Server Component} */}
      <Posts />
    </div>
  )
}
