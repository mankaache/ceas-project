import { commonImages } from "@/assets";
import { FormationCards } from "../Cards";
import Image from "next/image";

const AllPrograms = () => {
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

  return (
    <div className={"w-[85%] mx-auto pb-20 pt-7"}>
      <div>
        <h3 className={"text-2xl uppercase text-center font-bold py-16"}>
          The three pillars which constitute our entire training
        </h3>

        <div className={" w-full flex items-start gap-6 flex-col lg:flex-row"}>
          <div className={"border-dashed border-4 p-3 border-secondary"}>
            <div
              className={"w-10 relative flex justify-center items-center mb-4"}
            >
              <Image
                fill
                priority
                className={"w-full object -cover"}
                src={commonImages.bulb}
                alt={"Mission"}
              />
            </div>
            <h3 className={"font-semibold text-2xl py-5"}>
              Knowledge and evaluation of forest resources
            </h3>
            <div className={"text-lg"}>
              {/* Lorem Why do we use it? It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as */}
            </div>
          </div>
          <div className={"border-dashed border-4 p-3 border-secondary"}>
            <div
              className={"w-10 relative flex justify-center items-center mb-4"}
            >
              <Image
                fill
                priority
                className={"w-full object -cover"}
                src={commonImages.bulb}
                alt={"Mission"}
              />
            </div>
            <h3 className={"font-semibold text-2xl md:text-3xl py-5"}>
              Governance
            </h3>
            <div className={"text-lg"}>
              {/* Lorem Why do we use it? It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as */}
            </div>
          </div>
          <div className={"border-dashed border-4 p-3 border-secondary"}>
            <div
              className={"w-10 flex relative justify-center items-center mb-4"}
            >
              <Image
                fill
                priority
                className={"w-full object -cover"}
                src={commonImages.bulb}
                alt={"Mission"}
              />
            </div>
            <h3 className={"font-semibold text-2xl md:text-3xl py-5"}>
              Practical and ethical
            </h3>
            <div className={"text-lg"}>
              {/* Lorem Why do we use it? It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as */}
            </div>
          </div>
        </div>
      </div>
      <h3 className={"text-3xl capitalize font-bold py-16 text-primary"}>
        See all training Programs we do and offer
      </h3>

      <div
        className={
          "flex flex-wrap gap-6 justify-center md:justify-start items-center"
        }
      >
        {Formations.map((item) => (
          <FormationCards
            title={item.title}
            href={`/programs/${item.id}`}
            key={item.id}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPrograms;
