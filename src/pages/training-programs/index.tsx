import { commonImages } from "@/assets";
import { BaseLayout } from "@/components";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "@/firebase/config";
import { InnerPageLoader } from "@/components/loaders";
import { InnerPageError } from "@/components/errors";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa6";
import dayjs from "dayjs";
import FormationCards from "@/components/PageSegments/Cards/FormationCards";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const Programs = () => {

  const FORMATIONS = React.useMemo(
    () =>
      // PROGRAMS.map((program, idx) => ({
      //   id: idx,
      //   title: program,
      //   description:
      //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      // })),

      [
        {
          title:
            "Practiciens de l’observation independante des ressources forestieres",
          slug: "practiciens-de-lobservation-independante-des-ressources-forestieres",
          description: "",
          image: commonImages.Aboutus4,
        },
      ],
    []
  );


  const [filteredFormations, loading, error] = useCollectionData(
    query(
      collection(firestore, "training-programs")
      // where("category", "==", eventCategory)
    )
  );

  if (loading) return <InnerPageLoader loading={loading} />;

  if (error) return <InnerPageError error={error} />;




  const formations = filteredFormations?.reverse()
 

  return (
    <BaseLayout>
      <div className={"w-[95%] md:w-[90%] max-w-screen-2xl mx-auto pb-20 pt-2"}>
        <div className='relative w-[80%] mx-auto h-[80vh]'>

        <Image src={commonImages.trainingProgram} alt="training program" priority fill/>
        </div>
        <h3
          className={
            "text-3xl text-center capitalize font-bold pt-16 md:pt-20 pb-8 text-primary"
          }
        >
          Tous nos programmes de formation
        </h3>

        <div className={"flex flex-wrap gap-6 items-start"}>
          <>
          {formations?.map((item, idx) => (
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
          {FORMATIONS.map((item, idx) => (
            <FormationCards
              title={item.title}
              href={`/training-programs/details`}
              key={idx}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Programs;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "training-programs",
      ])),
    },
  };
}
