import Image from "next/image";
import { commonImages } from "@/assets";
import { Josée } from "@/assets/image";
const TeamMembers = () => {
  const TeamMembers = [
    {
      name: "Horline NJIKE épse BILOGUE MVOGO ",
      title: "SECRÉTAIRE GÉNÉRALE DE FLAG",
      desc: "Du haut de ses près de 20 ans d’expérience dans l'observation indépendante des ressources naturelles dans le bassin du Congo, Horline assure le top management et l’animation générale de FLAG. En tant que membre fondatrice, elle veille à l’intégration des valeurs dans les actions de FLAG et à l’instauration d’une culture organisationnelle qui répondent aux motivations qui ont guidé le développement de l’organisation qu’elle dirige.  Elle a participé à la fondation du CEAS-GRNE et contribue à son opérationnalisation grâce à son expertise et à son engagement pour la transmission des savoirs, savoir être et savoir-faire dans le domaine du suivi indépendant. Reconnue pour sa rigueur et ses fortes capacités d’analyse, elle est l'une des pièces maitresse dans la formation des futurs praticiens du suivi indépendant.",
      image: commonImages.Horline,
    },
    {
      name: "Jean Cyrille OWADA ",
      title: "DIRECTEUR DES PROGRAMMES à FLAG",
      desc: "Co-fondateur de FLAG , Jean Cyrille est également le Coordonnateur du projet qui assure le fonctionnement du CEAS-GRNE. Ingénieur en Chef des Eaux et Forêts avec plus de 20 ans d’expérience, Expert en contrôle forestier et en observation indépendante dont il est l'un des pionniers de cette pratique dans la sous-région du bassin du Congo. Sous sa supervision générale , le CEAS-GRNE forme les futurs praticiens du suivi indépendants, renforçant les capacités locales pour une gestion et protection optimales des ressources naturelles.",
      image: commonImages.Jean,
    },
    {
      name: "Dr SEKA JULIEN   ",
      title: "Directeur Délégué",
      desc: "SEKA Julien est diplômé de l'université Dschang (Cameroun) et l'université Laval (Canada). Son ambition est d'apporter une solide contribution à la gestion des écosystèmes forestiers en général,  ceux du Bassin du Congo en particulier. Spécialisé en Agroforesterie et en foresterie, il jouit d'une quinzaine d'années d'expérience comme enseignant/formateur. Il est l'un des directeurs délégués au CEAS-GRNE. Sa formation et son expérience sont aujourd'hui au service de l'atteinte des objectifs du CEAS-GRNE.",
      image: commonImages.noImage,
    },
    {
      name: "LYONGA LITUTE MARK",
      title: "Directeur Délégué",
      desc: "Mark Lyonga, Agro-environnementaliste et expert en Politique et Gouvernance forestière, est l'un des directeurs délégués du CEAS-GRNE. Il apporte son expertise dans la Gestion Durable des Ressources Naturelles et dans l'amélioration des pratiques de gouvernance forestière au sein du  CEAS. Il est chargé du suivi et de l'évaluation des programmes.",
      image: commonImages.Lyonga,
    },
    {
      name: "BOGNEU SADEU CYRILLE",
      title: "Directeur Délégué",
      desc: "Bogneu Sadeu Cyrille est Ingénieur forestier, et l'un des directeurs délégués au CEAS-GRNE.",
      image: commonImages.Bogneu,
    },
    {
      name: " Dr Daniel Armel OWONA MBARGA ",
      title: "Assistant technique principal à FLAG/ Expert Juriste",
      desc: "Daniel est juriste spécialisé en droit de l'environnement. Titulaire d'un Doctorat en Droit, il possède une longue expérience de mise en oeuvre du suivi indépendant et d'accompagnement d'OSC du Bassin du Congo et de l'Afrique de l'Est. Il met à contribution ses connaissances et son expertise au profit du CEAS à travers un appui dans la préparation des formations et l'accompagnement des praticiens dans la réalisation d'investigations",
      image: commonImages.Daniel,
    },
    {
      name: "EDOA YVES STEPHANE",
      title: "IT Officer à FLAG/ Personnel d’appui",
      desc: "Stéphane est actuellement personnel d'appui au CEAS-GRNE, Ingénieur de Conception en génie informatique, il occupe également le poste d'IT Officer chez FLAG. Il possède une solide expérience dans la gestion des infrastructures informatiques, la sécurité informatique, la gestion des systèmes et des logiciels, l'assistance technique et la gestion des données. Son rôle principal au CEAS-GRNE est de faciliter les cours entre enseignants et apprenants, ainsi que de développer des plateformes éducatives innovantes pour améliorer l'expérience d'apprentissage des étudiants.",
      image: commonImages.EDOA,
    },
    {
      name: "Josée Sylviane OWONA FOUDA",
      title: "Assistante Communication à FLAG/CEAS-GRNE",
      desc: "Titulaire d'une licence en Communication option journalisme et actuellement en cours de validation de son Master 2, Josée occupe le poste d'Assistante en communication chez FLAG. Au sein du CEAS-GRNE, Josée joue un rôle crucial en assurant une communication fluide et efficace entre toutes les parties prenantes. Elle veille à ce que les informations essentielles soient bien relayées et à ce que les activités et réalisations du CEAS-GRNE soient largement diffusées. Son travail contribue à renforcer la visibilité et la notoriété du CEAS-GRNE, tout en favorisant un environnement de collaboration et de partage des connaissances",
      image: commonImages.Josée,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {TeamMembers.map((member, idx) => (
        <div className="flex items-stretch shadow-lg p-6 rounded-xl justify-start m-2 " key={idx}>
          <div className="flex flex-col">
            <div className="flex justify-start items-center gap-8">
              <div className=" w-[100px] h-[100px] rounded-full aspect-square">
                <Image
                  // @ts-ignore
                  src={member.image}
                  className="rounded-full border-4 border-secondary aspect-square"
                  alt={member.title}
                  width={100}
                  height={100}
                  priority
                />
              </div>
              <div>
                <h2 className="font-semibold text-lg text-blue-950 capitalize">
                  {member.name}
                </h2>
                <p className="text-gray-500 text-sm capitalise">
                  {member.title}
                </p>
              </div>
            </div>

            <div className="mt-3 text-sm text-justify">{member.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
