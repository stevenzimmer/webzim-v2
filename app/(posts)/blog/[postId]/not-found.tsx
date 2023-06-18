import Link from "next/link"
export default function notFound() {
  return (
    <>
    <h1 className="text-center text-2xl">The requested post does not exist</h1>
    <Link href="/">Back to home</Link>
    </>
  )
}
