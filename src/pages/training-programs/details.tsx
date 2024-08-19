import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaCircleUser, FaTags } from "react-icons/fa6";
import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/router";
import { TfiLocationPin } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa";
import { commonImages } from "@/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ReactMarkdown = dynamic(
  () => import("react-markdown").then((mod) => mod.default),
  { ssr: false }
);

const TrainingProgram = () => {
  const router = useRouter();
  const { slug } = router.query;
  const program = {
    id: "1",
    slug: "test-training-program",
    title: "Title",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    content: `# Training Program
    
This is a sample training program`,
    image: {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      alt: "Internship opportunities",
    },
    location: "Douala",
    date: "2024-06-01",
  };

  const trainingProgram = {
    pillars: [
      {
        label: "Pilier 1: foresterie de base (FOB)",
        modules: [
          "MODULE 1: Connaissance et évaluation des ressources forestières",
          "MODULE 2: Aspects socioéconomique de la forêt",
          "MODULE 3: Gestion durable des ressources forestières",
        ],
      },
      {
        label:
          "Pilier 2: gouvernance, législation, responsabilités sociétale des entreprises",
        modules: [
          "MODULE 4: Politique droit et législation forestière",
          "MODULE 5: Problématique des droits humains dans le secteur forestier",
          "MODULE 6: Gouvernance forestière",
        ],
      },
      {
        label:
          "Pilier 3: pratique et éthique du suivi de la gestion des ressources forestières",
        modules: [
          "MODULE 7: Méthodes et outils de suivi",
          "MODULE 8: Planification et exécution d’une mission de suivi",
          "MODULE 9: Communication et lobbying",
        ],
      },
    ],
  };

  return (
    <BaseLayout>
      {!program ? (
        <div className="flex items-center justify-center p-8">
          <h1 className="text-3xl font-bold">
            Aucun programme de formation trouvé
          </h1>
        </div>
      ) : (
        <div className="w-full p-4 max-w-screen-lg py-4 mx-auto flex flex-col items-start justify-center gap-4 mb-20">
          {/* <h1 className="title text-4xl font-semibold pt-4">{program.title}</h1>

          <p className="excerpt text-slate-500">{program.excerpt}</p>

          <div className="flex items-center pb-3 justify-start text-xs text-slate-500 gap-4">
            <div className="location flex items-center justify-center gap-1">
              <TfiLocationPin size={18} />
              <p className={"font-semibold text-slate-500"}>
                {program.location}
              </p>
            </div>
            <div className="date flex items-center justify-center gap-2">
              <FaCalendar size={18} className="" />
              <p className="font-semibold text-slate-500">{program.date}</p>
            </div>
          </div>

          <div className="image w-full h-[250px] md:h-[400px] relative">
            <Image
              src={program.image.src}
              alt={program.image.alt}
              fill
              style={{ borderRadius: 8 }}
              // objectFit="contain"
            />
          </div>

          <div className="w-full markdown">
            <ReactMarkdown
              // children={program.content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              // TODO: style md components (links, tables)
            >
              {program.content}
            </ReactMarkdown>
          </div> */}

          <h1 className="title text-3xl md:text-4xl font-semibold pt-4">
            Practiciens de l’observation independante des ressources forestieres
          </h1>

          <div className="image w-full h-[250px] md:h-[400px] relative">
            <Image
              src={commonImages.Aboutus4}
              alt={"training program"}
              fill
              style={{ borderRadius: 8 }}
              // objectFit="contain"
            />
          </div>

          <div className="structure w-full">
            <Accordion type="multiple" className="w-full text-lg border-none">
              {trainingProgram.pillars.map((item, idx) => (
                <div key={idx} className="pillar">
                  <AccordionItem value={`item-${idx + 1}`}>
                    <AccordionTrigger className="trigger text-left text-lg font-bold p-4 hover:no-underline hover:bg-primary hover:text-white [&[data-state=open]]:bg-primary [&[data-state=open]]:text-white">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col border-l border-l-primary ml-2 mt-2 pl-2">
                      {item.modules.map((module, idx) => (
                        <p key={idx} className="md:text-lg">
                          {module}
                        </p>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default TrainingProgram;
