import Link from "next/link";

const mockUrls = [
  "https://e587s0tm1i.ufs.sh/f/2rmj4tvNrbxhBwbh9T3TJBk8EbWZ6th0vplVOMz9iaqIGXdS",
  "https://e587s0tm1i.ufs.sh/f/2rmj4tvNrbxhULJCEImA9pBuWEkz4ZA18emITLNQlagUDJ50",
  "https://e587s0tm1i.ufs.sh/f/2rmj4tvNrbxhvTzmcRJDSWrmEfI19xwYkpTOQe7NLA0dqiF4"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello
    </main>
  );
}
