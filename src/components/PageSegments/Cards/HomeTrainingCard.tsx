/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa6";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { InnerPageLoader } from "@/components/loaders";
import { InnerPageError } from "@/components/errors";
import dayjs from "dayjs";

const HomeTrainingCard = () => {
    const router = useRouter();
    // const { eventCategory } = router.query;
  
    const [filteredEvents, loading, error] = useCollectionData(
      query(
        collection(firestore, "training-programs")
        // where("category", "==", eventCategory)
      )
    );
  
    if (loading) return <InnerPageLoader loading={loading} />;
  
    if (error) return <InnerPageError error={error} />;
 

    const eventsReverse = filteredEvents?.reverse()

     const eventsToDisplay = eventsReverse?.slice(0, 3);
  return (
   <>
      {eventsToDisplay?.map((item, idx) => (
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
                  <h3 className={"font-semibold text-2xl pt-2 pb-3"}>
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
                  
                  <Link
                    className={
                      "pt-2 font-semibold inline-block text-center w-full text-primary text-base"
                    }
                    href={`training-programs/${item.slug}`}
                  >
                    Voir les détails
                  </Link>
                </div>
              </div>
            ))}
   </>
  )
}

export default HomeTrainingCard