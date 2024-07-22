import { commonImages } from "@/assets";
import { BaseLayout } from "@/components";
import FormationCards from "@/components/PageSegments/Cards/FormationCards";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React from "react";
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

        <div className={"flex flex-wrap gap-6 items-center"}>
          {FORMATIONS.map((item, idx) => (
            <FormationCards
              title={item.title}
              href={`/training-programs/${item.slug}`}
              key={idx}
              desc={item.description}
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
