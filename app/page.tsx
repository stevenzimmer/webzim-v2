import Link from "next/link"
export default function Home() {
  return (
    <div className="container">
      <div>Homepage</div>
      <Link href="/langchain">Langchain</Link>
    </div>
  )
}
