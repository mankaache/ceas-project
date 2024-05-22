import { FormationCards } from "../Cards";
import { Button } from "@/components";

const SectionThree = () => {
  return (
    <div className={"w-[95%] md:w-[90%] mb-20 mx-auto max-w-screen-2xl"}>
      <h3 className={"text-center text-3xl py-5 font-semibold pb-1"}>
        Our <span className={" text-secondary"}>Training </span> Programs
      </h3>
      <p
        className={
          "py-3 text-center mx-auto w-full md:w-[60%] text-base md:text-lg lg:text-xl mb-6"
        }
      >
        We offer training programs to partner organisations and individual
        organisation
      </p>
      <div className={"flex flex-wrap gap-6 justify-center items-stretch"}>
        {[
          {
            title: "Title",
            href: "/",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },

          {
            title: "Title",
            href: "/",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },

          {
            title: "Title",
            href: "/",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ].map((program) => (
          <FormationCards
            title={program.title}
            href={program.href}
            desc={program.desc}
          />
        ))}
      </div>

      <div className={"flex mt-12 justify-center items-center"}>
        <Button href={"/programs"} text={"See All"} />
      </div>
    </div>
  );
};

export default SectionThree;
