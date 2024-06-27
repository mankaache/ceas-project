/* eslint-disable react/no-unescaped-entities */
import { commonImages } from "@/assets";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className={"relative"}>
      <div className="w-[300px] h-[300px] rounded-full bg-primary/20 absolute left-[-150px] top-[0px]"></div>
      <div className={"my-12 w-[90%] md:w-[80%] mx-auto max-w-screen-2xl"}>
        <h3
          className={"text-center lg:pb-4 text-3xl text-primary font-semibold"}
        >
          Qui sommes-nous?
        </h3>

        <div
          className={"flex flex-col lg:flex-row items-start mt-4 gap-10 w-full"}
        >
          <div className={"relative flex-1 w-full max-h-[400px] aspect-square"}>
            <Image
              fill
              priority
              className={"w-full h-full object-cover"}
              alt={"d"}
              src={commonImages.Aboutus5}
            />
          </div>
          <p className={" flex-1 leading-8 text-lg text-justify"}>
            Parmi les précurseurs de la surveillance indépendante de
            l’application des réglementations forestières, un groupe d’experts
            réunis au sein de l’organisation Field Legality Advisory Group
            (FLAG) a mené des consultations avec l’ensemble des parties
            prenantes (secteur privé, administration en charge de la gestion et
            du contrôle, les organisations de la société civile impliquées dans
            cette activité, et d’autre personnes ressources) dans et en dehors
            du bassin du Congo. L'objectif de ces consultations depuis dix ans,
            était d'analyser de manière holistique les problèmes et les
            solutions possibles pour améliorer la qualité et la crédibilité de
            l'observation indépendante. Au cours de ces discussions, il est
            apparu clairement que l'absence d'espaces d'apprentissage mutuel et
            de renforcement des capacités constituait un obstacle majeur. C'est
            dans ce contexte que FLAG a pris l'initiative de créer le Centre
            d'Excellence et d'Application au Suivi de la Gestion des Ressources
            Naturelles (CEAS-GRNE). 
          </p>
        </div>
      </div>
      <div className={"mt-20 w-[90%] md:w-[80%] mx-auto max-w-screen-2xl"}>
        <h3 className={"text-center text-xl font-semibold"}></h3>

        <div
          className={
            "flex items-start flex-col lg:flex-row-reverse mt-10 gap-10 w-full"
          }
        >
          <div className={"relative flex-1 w-full max-h-[400px] aspect-square"}>
            <Image
              fill
              priority
              className={"w-full h-full object-cover"}
              alt={"d"}
              src={commonImages.Aboutus5}
            />
          </div>
          <p className={" flex-1 leading-8 text-lg text-justify"}>
          Le CEAS-GRNE, dédié à la formation en
            surveillance de la gestion des ressources naturelles, est devenu
            opérationnel en 2022. Il a été financé par l'Agence Norvégienne pour
            la Coopération et le Développement (NORAD) dans le cadre du projet
            « Technologies innovantes pour la lutte contre l’exploitation
            forestière illégale du bois : mise à l’échelle des plateformes
            d’identification et de transparence du bois, Composante du bassin du
            Congo ». Il propose une formation continue certifiante des
            praticiens qualifiés en suivi de la gestion des ressources
            naturelles. Depuis son lancement, le CEAS-GRNE joue un rôle crucial
            dans le renforcement des capacités et la promotion des bonnes
            pratiques en matière de surveillance de la gestion des ressources
            naturelles. Espace d'apprentissage mutuel, le centre contribue ainsi
            à la professionnalisation et à l'efficacité de la surveillance de la
            gestion des ressources naturelles.
          </p>
        </div>
      </div>
      <p className="w-[80%] my-12 text-lg mx-auto text-justify"> Le CEAS-GRNE en tant que
            d’expertise technique dédié à la formation en surveillance de la
            gestion des ressources naturelles, est l’option la plus convenable
            dans la région car il répond à la fois aux besoins de consolidation
            des acquis et d’innovation des techniques, de partage d’expérience,
            de transfert d’expertise, et de constitution d’une communauté de
            bonnes pratiques en matière de surveillance de la gestion des
            ressources naturelles.</p>
    </div>
  );
};

export default WhoWeAre;
