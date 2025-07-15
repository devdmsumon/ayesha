import { Post } from "@/types/postType";
import { urlFor } from "@/lib/sanity/imageUrlBuilder";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-md shadow-md overflow-hidden flex flex-col">
      <div className="post-thumb">
        {post.coverImage && (
          <Link href={`/posts/${post.slug.current}`}>
            <Image
              src={urlFor(post.coverImage)
                .width(800)
                .height(500)
                .fit("crop")
                .auto("format")
                .url()}
              alt={post.title}
              width={800}
              height={500}
              className="w-full aspect-[16/10] object-cover"
            />
          </Link>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm text-gray-500 mb-1">{post.category?.title}</div>

        <Link href={`/posts/${post.slug.current}`}>
          <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
            {post.title}
          </h2>
        </Link>

        <div className="text-sm text-gray-500 mt-1 mb-2">
          {new Date(post.publishedAt).toLocaleDateString()} |{" "}
          {post.author?.name}
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>

        <Link
          href={`/posts/${post.slug.current}`}
          className="mt-auto inline-block text-sm text-blue-500 hover:underline"
        >
          Continue reading →
        </Link>
      </div>
    </article>
  );
}
