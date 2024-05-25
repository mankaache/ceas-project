import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
import { IArticle } from "@/models";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircleUser, FaTags } from "react-icons/fa6";

const Articles = () => {
  return (
    <BaseLayout>
      <div className="w-full max-w-screen-lg py-4 mx-auto flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl md:text-4xl font-bold py-2">Articles</h1>
        <div className="articles w-full p-4">
          <div className="featured w-full mb-8">
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

          <div className="articles my-4 w-full flex flex-wrap items-center justify-center gap-12 md:gap-8">
            {[
              {
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
                tags: ["nature"],
                author: {
                  name: "CEAS GRNE",
                },
                date: "2021-10-10",
              },
              {
                title:
                  "In three words I can sum up everything I’ve learned about life: It goes on.",
                slug: "new-blog-test-article",
                image: {
                  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
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
              },
              {
                title:
                  "In three words I can sum up everything I’ve learned about life: It goes on.",
                slug: "new-blog-test-article",
                image: {
                  src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
                  alt: "lorem",
                },
                content: "lorem lorem",
                excerpt:
                  "These complex processes, called physiological functions, have underlying physical and chemical bases, as well as signaling and control mechanisms that are essential to maintaining life.",
                tags: ["plants"],
                author: {
                  name: "CEAS GRNE",
                },
                date: "2021-10-10",
              },
            ].map((article, idx) => (
              <div key={idx} className="article w-full md:w-[47%] lg:w-[31%]">
                <Article article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

const FeaturedArticle = ({ article }: { article: IArticle }) => (
  <div className="w-full h-full flex flex-col md:flex-row gap-4 items-stretch justify-center">
    <div className="image w-full md:w-[48%] max-h-[250px] md:max-h-[350px] aspect-square relative">
      <Image
        src={article.image.src}
        alt={article.image.alt}
        fill
        style={{ borderRadius: 8 }}
      />
    </div>
    <div className="details w-full md:w-[48%] flex flex-col items-start justify-between gap-4">
      <div className="tags w-full flex items-start gap-2 justify-start">
        {article.tags.map((tag, idx) => (
          <Button
            key={idx}
            className="flex items-center justify-center gap-2 text-white capitalize"
          >
            <FaTags />
            {tag}
          </Button>
        ))}
      </div>

      <Link href={`articles/${article.slug}`}>
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
          <p className="author font-semibold">{article.author.name}</p>
          <p className="date text-slate-500">{article.date}</p>
        </div>
      </div>
    </div>
  </div>
);

const Article = ({ article }: { article: IArticle }) => (
  <div className="rounded-lg w-full h-full flex flex-col gap-4 items-stretch justify-center">
    <div className="image w-full h-[250px] md:h-[250px] relative">
      <Image
        src={article.image.src}
        alt={article.image.alt}
        fill
        style={{ borderRadius: 8 }}
      />
    </div>
    <div className="details w-full flex flex-col items-start justify-between gap-4">
      <div className="tags w-full flex items-start gap-2 justify-start">
        {article.tags.map((tag, idx) => (
          <Button
            key={idx}
            className="flex items-center justify-center gap-2 text-white capitalize"
          >
            <FaTags />
            {tag}
          </Button>
        ))}
      </div>

      <Link href={`/articles/${article.slug}`}>
        <h2 className="title text-2xl font-semibold hover:underline transition-all duration-300">
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

export default Articles;
