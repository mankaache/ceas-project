import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaCircleUser, FaTags } from "react-icons/fa6";
import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/router";
import { IArticle } from "@/models";

const ReactMarkdown = dynamic(
  () => import("react-markdown").then((mod) => mod.default),
  { ssr: false }
);

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;

  const article: IArticle = {
    title:
      "In three words I can sum up everything I’ve learned about life: It goes on.",
    slug: "new-blog-test-article",
    image: {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      alt: "lorem",
    },
    content: `
In operant conditioning, a reinforcement (by reward) or instead a punishment is given after a given behavior, changing the frequency and/or form of that behavior. Stimulus present when the behavior/consequence occurs come to control these behavior modifications.

Observational learning is learning that occurs through observing the behavior of others. It is a form of social learning which takes various forms, based on various processes. In humans, this form of learning seems to not need reinforcement to occur, but instead, requires a social model such as a parent, sibling, friend, or teacher with surroundings.

## The longer I live, the more I realize that I am never wrong about anything, and that all the pains I have so humbly taken to verify my notions have only wasted my time!

Imprinting is a kind of learning occurring at a particular life stage that is rapid and apparently independent of the consequences of behavior. In filial imprinting, young animals, particularly birds, form an association with another individual or in some cases, an object, that they respond to as they would to a parent. In 1935, the Austrian Zoologist Konrad Lorenz discovered that certain birds follow and form a bond if the object makes sounds.

## Formal learning

These five types of play are often intersecting. All types of play generate thinking and problem-solving skills in children. Children learn to think creatively when they learn through play. Specific activities involved in each type of play change over time as humans progress through the lifespan. Play as a form of learning, can occur solitarily, or involve interacting.

Enculturation is the process by which people learn values and behaviors that are appropriate or necessary in their surrounding culture. This is different from acculturation, where a person adopts the values and societal rules of a culture different from their native.

- [Nonformal learning](https://google.com) and combined approaches
- Reading directions helps a player learn the patterns that solve the Rubik’s Cube
- Practicing the moves repeatedly helps build “muscle memory” and speed.
- Thinking critically about moves helps find shortcuts, which speeds future attempts.
- Observing the Rubik’s Cube’s six colors help anchor solutions in the mind.
- Revisiting the cube occasionally helps retain the skill.
- Electronic learning or e-learning is computer-enhanced learning. A specific and always more diffused e-learning is mobile learning (m-learning), which uses different mobile telecommunication equipment, such as cellular phones.
    
    `,
    excerpt:
      "These complex processes, called physiological functions, have underlying physical and chemical bases, as well as signaling and control mechanisms that are essential to maintaining life.",
    tags: ["nature"],
    author: {
      name: "CEAS GRNE",
    },
    date: "2021-10-10",
  };

  const markdown = `A paragraph with *emphasis* and **strong importance**.

- Hi

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

| Head | Head | Head |
| --- | --- | --- |
| Data | Data | Data |
| Data | Data | Data |

<h1>Hi</h1>

<table>
<tr><td>Head</td></tr>
</table>
`;

  return (
    <BaseLayout>
      <div className="w-full p-4 max-w-screen-md py-4 mx-auto flex flex-col items-start justify-center gap-4">
        <div className="tags w-full flex items-start gap-2 justify-start">
          {article.tags.map((tag) => (
            <Button className="flex items-center justify-center gap-2 text-white capitalize">
              <FaTags />
              {tag}
            </Button>
          ))}
        </div>

        <h1 className="title text-4xl font-semibold">{article.title}</h1>

        <p className="excerpt text-slate-500">{article.excerpt}</p>

        <div className="w-full author flex items-stretch justify-start gap-2">
          <div className="avatar text-slate-500">
            <FaCircleUser size={45} />
          </div>
          <div className="info flex flex-col items-start justify-center text-sm">
            <p className="author font-semibold">{article.author.name}</p>
            <p className="date text-slate-500">{article.date}</p>
          </div>
        </div>

        <div className="image w-full h-[250px] md:h-[400px] relative">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            style={{ borderRadius: 8 }}
            // objectFit="contain"
          />
        </div>

        <div className="w-full markdown">
          <ReactMarkdown
            children={article.content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            // TODO: style md components (links, tables)
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Article;
