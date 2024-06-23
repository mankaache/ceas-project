import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {  FaTags } from "react-icons/fa6";
import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/router";
import { IEvent } from "@/models";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { InnerPageLoader } from "@/components/loaders";
import { InnerPageError } from "@/components/errors";
import dayjs from "dayjs";

const ReactMarkdown = dynamic(
  () => import("react-markdown").then((mod) => mod.default),
  { ssr: false }
);

const Event = () => {
  const router = useRouter();
  const { slug, eventCategory } = router.query;

  const [events, loading, error] = useCollectionData(
    query(
      collection(firestore, "events"),
      // where("category", "==", eventCategory),
      where("slug", "==", slug)
    )
  );

  const event = React.useMemo(
    () => (events ? events[0] : undefined),
    [events]
  ) as IEvent;

  if (loading) return <InnerPageLoader loading={loading} />;

  if (error) return <InnerPageError error={error} />;

  return (
    <BaseLayout>
      {!event ? (
        <div className="flex items-center justify-center p-8">
          <h1 className="text-4xl font-bold">Aucun événement trouvé </h1>
        </div>
      ) : (
        <div className="w-full p-4 max-w-screen-md py-4 mx-auto flex flex-col items-start justify-center gap-4">
          <div className="tags w-full flex items-start gap-2 justify-start">
            <Button className="flex items-center justify-center gap-2 text-white capitalize">
              <FaTags />
              {event.category}
            </Button>
          </div>

          <h1 className="title text-4xl font-semibold">{event.title}</h1>

          <p className="excerpt text-slate-500">{event.excerpt}</p>

          <div className="flex items-center pb-3 justify-start text-xs text-slate-500 gap-4">
            <div className="location flex items-center justify-center gap-1">
              <TfiLocationPin size={18} />
              <p className={"font-semibold text-slate-500"}>{event.location}</p>
            </div>
            <div className="date flex items-center justify-center gap-2">
              <FaCalendar size={18} className="" />
              <p className="font-semibold text-slate-500">
                {dayjs(event.date).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>

          <div className="image w-full h-[250px] md:h-[400px] relative">
            <Image
              src={event.image.src}
              alt={event.image.caption}
              fill
              style={{ borderRadius: 8 }}
              objectFit="cover"
            />
          </div>

          <div className="w-full markdown">
            <ReactMarkdown
              // children={event.content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              // TODO: style md components (links, tables)
            >
              {event.content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default Event;

export async function getStaticPaths() {
  const events = await getDocs(collection(firestore, "events"));

  const paths = events.docs.map((event) => ({
    params: { slug: event.data().slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
