import { commonImages } from "@/assets";
import { BaseLayout } from "@/components";
import FormationCards from "@/components/PageSegments/Cards/FormationCards";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React from "react";
const Programs = () => {
  const PROGRAMS = ["mine", "forêt", "pêche", "faune", "environnement"];

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

  const PILLARS = React.useMemo(() => {
    return [
      {
        title: "Connaissance et évaluation des ressources",
        description:""
          // "Lorem Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
      },

      {
        title: "Gouvernance",
        description:""
          // "Lorem Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
      },

      {
        title: "Pratique et éthique",
        description:""
          // "Lorem Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
      },
    ];
  }, []);

  return (
    <BaseLayout>
      <div className={"w-[95%] md:w-[90%] max-w-screen-2xl mx-auto pb-20 pt-2"}>
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl text-secondary font-bold mt-8 mb-1 uppercase flex flex-wrap items-center justify-between gap-0">
            {PROGRAMS.map((program, idx) => (
              <span
                key={idx}
                className="border-4 w-1/4 lg:w-1/5 last:w-full lg:last:w-1/5  border-r-0 last:border-t-0 lg:last:border-t-4 last:border-r-4 [&:nth-last-child(2)]:border-r-4 lg:[&:nth-last-child(2)]:border-r-0  border-dashed border-secondary py-2 text-center"
              >
                {program}
              </span>
            ))}
          </h2>
          <h3 className={"text-2xl uppercase text-center font-bold py-8"}>
            Les trois piliers qui constituent l’ensemble de notre formation
          </h3>

          <div
            className={
              "w-full flex items-start justify-center lg:items-stretch gap-6 flex-col lg:flex-row"
            }
          >
            {PILLARS.map((item, idx) => (
              <div
                key={idx}
                className={"border-dashed border-4 p-3 border-secondary"}
              >
                <div
                  className={
                    "w-10 relative flex justify-center items-center mb-4"
                  }
                >
                  <Image
                    fill
                    // className={"w-full object-cover"}
                    src={commonImages.bulb}
                    alt={"Mission"}
                  />
                </div>
                <h3 className={"font-semibold text-2xl pb-5 pt-0 text-center"}>
                  {item.title}
                </h3>
                <p className={"text-lg text-justify"}>{item.description}</p>
              </div>
            ))}
          </div>
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
