import { commonImages } from "@/assets";
import { Button } from "@/components";
import Link from "next/link";
import Image from "next/image";

const Activities = () => {
  return (
    <div className="bg-secondary/20 pt-1 md:pt-0">
      <div className="w-[96%] lg:w-[95%] max-w-screen-2xl mx-auto mt-10 mb-4 ">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-12 pb-12 md:py-12 px-6 items-start w-full ">
          <div className={"relative w-[400px] aspect-square max-w-full flex-1"}>
            <Image
              fill
              objectFit="cover"
              src={commonImages.Aboutus2}
              alt={""}
              className={"w-full h-full"}
            />
          </div>
          <div className={"w-full flex-1"}>
            <h3 className={"font-semibold text-3xl text-center md:text-left"}>
              Nous menons des activités pour promouvoir{" "}
              <span className={"text-secondary"}>la durabilité</span>{" "}
            </h3>
            <p className={"mb-5 mt-4 text-justify"}>
              Nous avons tous un rôle à jouer pour garantir un avenir durable.
              Cela signifie trouver des moyens de répondre à nos besoins sans
              nuire à la capacité des générations futures à répondre aux leurs.
              Pour y parvenir, nous pouvons nous engager dans une variété
              d’activités qui favorisent la durabilité. Celles-ci peuvent
              impliquer des pratiques quotidiennes comme la réduction des
              déchets et la conservation des ressources, ou des actions à plus
              grande échelle comme soutenir des initiatives en matière
              d’énergies renouvelables ou plaider en faveur de politiques
              environnementales.
            </p>
            <div className={"flex flex-col lg:flex-row items-center gap-3"}>
              <Button
                className="w-full text-center text-base lg:text-sm xl:text-base"
                href={"/news/events"}
                text={"Voir nos événements"}
              />
              <Link
                href={"/training-programs"}
                className={
                  "w-full text-center text-base lg:text-sm xl:text-base border px-4 py-3 hover:font-bold hover:border-2 border-secondary text-secondary rounded-lg bg-transparent"
                }
              >
                Voir nos programmes de formation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
