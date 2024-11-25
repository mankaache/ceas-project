/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { commonImages } from "@/assets";
import { IEvent } from "@/models";
import {  FaTags } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { EVENTS, eventCategoryMap } from "@/data";
import { BaseLayout } from "@/components";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa6";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { InnerPageLoader } from "@/components/loaders";
import { InnerPageError } from "@/components/errors";
import dayjs from "dayjs";

const EventCategory = () => {
  const router = useRouter();
  // const { eventCategory } = router.query;

  const [filteredEvents, loading, error] = useCollectionData(
    query(
      collection(firestore, "events")
      // where("category", "==", eventCategory)
    )
  );

  if (loading) return <InnerPageLoader loading={loading} />;

  if (error) return <InnerPageError error={error} />;

  return (
    <BaseLayout>
      {!Boolean(filteredEvents?.length) ? (
        <div className="flex items-center justify-center p-8">
          <h1 className="text-3xl capitalize font-semibold">
            {/* Pas de {eventCategoryMap[eventCategory as string]} */}
            aucun événement trouvé pour l'instant
          </h1>
        </div>
      ) : (
        <div className={"pb-24 pt-2 md:pt-6  px-2 w-[96%] md:w-[85%] mx-auto"}>
          <h1 className={"font-bold text-3xl text-center py-4 capitalize"}>
            {/* {eventCategoryMap[eventCategory as string]} */}
            Evenements
          </h1>

          <div className={"flex gap-5 flex-wrap items-start"}>
            {filteredEvents?.sort((a, b) => {
                  const dateA = new Date(a.createdAt).getTime(); 
                  const dateB = new Date(b.createdAt).getTime();
              
              
                  if (isNaN(dateA)) return 1;
                  if (isNaN(dateB)) return -1;
              
                  return dateB - dateA; 
                }).map((item, idx) => (
              <div
                key={idx}
                className={
                  "card mt-6 w-full md:w-[48%] lg:w-[31%] bg-white shadow-lg rounded-lg"
                }
              >
                <p
                  className={
                    "bg-black/20 w-full h-[300px] relative overflow-hidden rounded-lg mb-2"
                  }
                >
                  <Image
                    src={item.image.src}
                    fill
                    priority
                    alt={item.image.caption}
                    objectFit="cover"
                  />
                </p>
                <div className={"w-full py-3 px-2"}>
                  <h3 className={" text-ellipsis truncate font-semibold text-2xl pt-2 pb-3"}>
                    {item.title}
                  </h3>
                  <div className="flex items-center pb-3 justify-start text-xs text-slate-500 gap-4">
                    <div className="location flex items-center justify-center gap-1">
                      <TfiLocationPin size={18} />
                      <p className={"font-semibold text-slate-500"}>
                        {item.location}
                      </p>
                    </div>
                    <div className="date flex items-center justify-center gap-2">
                      <FaCalendar size={18} className="" />
                      <p className="font-semibold text-slate-500">
                        {dayjs(item.date).format("YYYY-MM-DD")}
                      </p>
                    </div>
                  </div>
                  <p className={"text-base pb-3 text-light text-ellipsis truncate"}>{item.excerpt}</p>
                  <p className="w-auto items-center inline px-4 py-1 rounded-lg text-sm bg-primary justify-center gap-2 text-white capitalize">
             
              {item.category}
            </p>
                  <Link
                    className={
                      "pt-2 font-semibold inline-block text-center w-full text-primary text-base"
                    }
                    href={`events/${item.slug}`}
                  >
                    Voir les détails
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default EventCategory;
