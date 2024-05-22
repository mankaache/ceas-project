import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { commonImages } from "@/assets";
import { IEvent } from "@/models";
import { EVENTS, catergoryMap } from "@/data";
import { BaseLayout } from "@/components";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa6";
import React from "react";

const EventCategory = () => {
  const router = useRouter();
  const { eventCategory } = router.query;

  const filteredEvents = React.useMemo(() => {
    return EVENTS.filter((event) => event.category === eventCategory);
  }, [eventCategory]);

  return (
    <BaseLayout>
      {!Boolean(filteredEvents.length) ? (
        <div className="flex items-center justify-center p-8">
          <h1 className="text-4xl font-bold">
            No {catergoryMap[eventCategory as string]}
          </h1>
        </div>
      ) : (
        <div className={"pb-24 pt-2 md:pt-6  px-2 w-[96%] md:w-[85%] mx-auto"}>
          <h1 className={"font-bold text-3xl text-center py-4 capitalize"}>
            {catergoryMap[eventCategory as string]}
          </h1>

          <div className={"flex gap-5 flex-wrap items-center"}>
            {filteredEvents.map((item) => (
              <div
                key={item.id}
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
                    alt={item.image.alt}
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
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <p className={"text-base pb-3 text-light"}>{item.excerpt}</p>
                  <Link
                    className={
                      "pt-2 font-semibold inline-block text-center w-full text-primary text-lg"
                    }
                    href={`${eventCategory}/${item.slug}`}
                  >
                    View details
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
