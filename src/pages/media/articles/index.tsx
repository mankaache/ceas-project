import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleUser, FaTags } from "react-icons/fa6";

const Articles = () => {
  return (
    <BaseLayout>
      <div className="w-full max-w-screen-lg py-4 mx-auto border border-red-500 flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl md:text-4xl font-bold pt-2 pb-4">Articles</h1>
        <div className="articles w-full">
          <div className="featured w-full">
            <FeaturedArticle
              article={{
                title:
                  "In three words I can sum up everything I’ve learned about life: It goes on.",
                slug: "new-blog-test-article",
                image: {
                  src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                  alt: "lorem",
                },
                content: "lorem lorem",
                excerpt:
                  "These complex processes, called physiological functions, have underlying physical and chemical bases, as well as signaling and control mechanisms that are essential to maintaining life.",
                tags: ["lifestyle"],
                author: {
                  name: "CEAS GRNE",
                },
                date: "2021-10-10",
              }}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

const FeaturedArticle = ({
  article,
}: {
  article: {
    slug: string;
    image: { src: string; alt: string };
    title: string;
    excerpt: string;
    content: string;
    tags: string[];
    author: { name: string };
    date: string;
  };
}) => (
  <div className="w-full h-full flex flex-wrap flex-col md:flex-row gap-4 items-stretch justify-center">
    <div className="image w-full md:w-[49%] md:max-h-[350px] aspect-square relative">
      <Image src={article.image.src} alt={article.image.alt} fill />
    </div>
    <div className="details w-full md:w-[49%] flex flex-col items-start justify-between gap-4">
      <div className="tags w-full flex items-start gap-2 justify-start">
        {article.tags.map((tag) => (
          <Button className="flex items-center justify-center gap-2 text-white capitalize">
            <FaTags />
            {tag}
          </Button>
        ))}
      </div>

      <Link href={`/articles/${article.slug}`}>
        <h2 className="title text-4xl font-semibold hover:underline transition-all duration-300">
          {article.title}
        </h2>
      </Link>

      <p className="excerpt text-slate-500">{article.excerpt}</p>

      <div className="author flex items-stretch justify-center gap-2">
        <div className="avatar text-slate-500">
          <FaCircleUser size={45} />
        </div>
        <div className="info flex flex-col items-start justify-center text-sm">
          <p className="author">{article.author.name}</p>
          <p className="date text-slate-500">{article.date}</p>
        </div>
      </div>
    </div>
  </div>
);

const Article = ({
  article,
}: {
  article: {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    tags: string[];
  };
}) => <div className=""></div>;

export default Articles;
