import { commonImages } from "@/assets";
import { BaseLayout } from "@/components";
import FormationCards from "@/components/PageSegments/Cards/FormationCards";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React from "react";
const Programs = () => {
  const Formations = [
    {
      id: "1",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "2",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "3",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "4",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "5",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "1",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "6",
      title: "Title",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const PILLARS = React.useMemo(() => {
    return [
      {
        title: "Knowledge and evaluation of forest resources",
        description:
          "Lorem Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
      },

      {
        title: "Governance",
        description:
          "Lorem Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
      },

      {
        title: "Practical and Ethical",
        description:
          "Lorem Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
      },
    ];
  }, []);

  return (
    <BaseLayout>
      <div className={"w-[95%] md:w-[90%] max-w-screen-2xl mx-auto pb-20 pt-2"}>
        <div>
          <h3 className={"text-2xl uppercase text-center font-bold py-8"}>
            The three pillars which constitute our entire training
          </h3>

          <div
            className={
              "w-full flex items-start lg:items-stretch gap-6 flex-col lg:flex-row"
            }
          >
            {PILLARS.map((item) => (
              <div className={"border-dashed border-4 p-3 border-secondary"}>
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
          See all training Programs we do and offer
        </h3>

        <div className={"flex flex-wrap gap-6 justify-center items-center"}>
          {Formations.map((item) => (
            <FormationCards
              title={item.title}
              href={`/training-programs/${item.id}`}
              key={item.id}
              desc={item.description}
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
