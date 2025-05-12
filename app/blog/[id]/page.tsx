"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/assets/data/blogposts";
import { use } from "react";

// Sample blog posts data - in a real app, you would fetch this from an API or database

export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  console.log(id);
  // Find the blog post with the matching ID
  const post = blogPosts.find((post) => post.id === id);

  console.log(post);

  if (!post) {
    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
            <Button asChild className="mt-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={16} />
            <span>{post.category}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="prose dark:prose-invert max-w-none mt-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <a
          href={post.link}
          target="_blank"
          className="p-0 h-auto gap-1 hover:bg-transparent hover:text-purple-600"
        >
          <Button>Go to Medium</Button>
        </a>
      </article>
    </main>
  );
}
