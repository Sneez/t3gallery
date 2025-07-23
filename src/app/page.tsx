import Link from "next/link"
import { db } from "~/server/db"

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://e587s0tm1i.ufs.sh/f/2rmj4tvNrbxhBwbh9T3TJBk8EbWZ6th0vplVOMz9iaqIGXdS",
  "https://e587s0tm1i.ufs.sh/f/2rmj4tvNrbxhULJCEImA9pBuWEkz4ZA18emITLNQlagUDJ50",
  "https://e587s0tm1i.ufs.sh/f/2rmj4tvNrbxhvTzmcRJDSWrmEfI19xwYkpTOQe7NLA0dqiF4"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log( posts )

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello
    </main>
  );
}
