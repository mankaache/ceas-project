import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaCircleUser, FaTags } from "react-icons/fa6";
import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/router";
import { IEvent } from "@/models";
import { EVENTS, catergoryMap } from "@/data";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa";

const ReactMarkdown = dynamic(
  () => import("react-markdown").then((mod) => mod.default),
  { ssr: false }
);

const TrainingProgram = () => {
  const router = useRouter();
  const { slug } = router.query;
  const program = {
    id: "1",
    slug: "test-training-program",
    title: "Title",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content: `# Training Program
    
This is a sample training program`,
    image: {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      alt: "Internship opportunities",
    },
    location: "Douala",
    date: "2024-06-01",
  };

  return (
    <BaseLayout>
      {!program ? (
        <div className="flex items-center justify-center p-8">
          <h1 className="text-4xl font-bold">Not found</h1>
        </div>
      ) : (
        <div className="w-full p-4 max-w-screen-md py-4 mx-auto flex flex-col items-start justify-center gap-4">
          <h1 className="title text-4xl font-semibold pt-4">{program.title}</h1>

          <p className="excerpt text-slate-500">{program.excerpt}</p>

          <div className="flex items-center pb-3 justify-start text-xs text-slate-500 gap-4">
            <div className="location flex items-center justify-center gap-1">
              <TfiLocationPin size={18} />
              <p className={"font-semibold text-slate-500"}>
                {program.location}
              </p>
            </div>
            <div className="date flex items-center justify-center gap-2">
              <FaCalendar size={18} className="" />
              <p className="font-semibold text-slate-500">{program.date}</p>
            </div>
          </div>

          <div className="image w-full h-[250px] md:h-[400px] relative">
            <Image
              src={program.image.src}
              alt={program.image.alt}
              fill
              style={{ borderRadius: 8 }}
              // objectFit="contain"
            />
          </div>

          <div className="w-full markdown">
            <ReactMarkdown
              children={program.content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              // TODO: style md components (links, tables)
            />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default TrainingProgram;
