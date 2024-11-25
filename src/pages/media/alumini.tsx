import { BaseLayout } from "@/components";
import { InnerPageError } from "@/components/errors";
import { InnerPageLoader } from "@/components/loaders";
import { Button } from "@/components/ui/button";
import { firestore } from "@/firebase/config";
import { useSubcategories } from "@/firebase/helpers";
import { cn } from "@/lib/utils";
import { IAlumini, IDocument } from "@/models";
import { collection } from "firebase/firestore";
import React from "react";
import Image from "next/image";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FaDownload } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

const Alumini = () => {
  const [category, setCategory] = React.useState("");

  const [categories, catLoading, catError] = useSubcategories("alumini");
  const [alumini, loading, error] = useCollectionData(
    collection(firestore, "alumini")
  );

  const categoryLabels = React.useMemo(() => {
    const categoriesSet: Set<string> = new Set();

    // categoriesSet.add("tout");

    categories?.forEach((category) => {
      categoriesSet.add(category.label);
    });

    return Array.from(categoriesSet);
  }, [categories]);

  React.useEffect(() => {
    if (categoryLabels.length > 0 && category === "") {
      setCategory(categoryLabels[0]);
    }
  }, [categoryLabels, category]);

  const filteredDocs = React.useMemo(() => {
    return (
      alumini?.filter((alumini) => {
        // if (category === "tout") {
        //   return true;
        // }
        if (category === alumini.category) {
          return true;
        }
        return false;
      }) || []
    );
  }, [category, alumini]);

  if (loading) return <InnerPageLoader loading={loading} />;

  if (error) return <InnerPageError error={error} />;

  return (
    <BaseLayout>
      <div className="w-full">
        <div className="w-full max-w-screen-2xl h-full px-2 md:px-4 py-4 mx-auto">
          <div className="docs bg-gray-50 h-full p-4 rounded-lg border shadow-md w-full mx-auto">
            <h1 className="title text-3xl text-center mb-2 font-poppins">
              Alumni
            </h1>
            <p className="p-2">Catégories</p>
            <div className="categories flex flex-wrap gap-2 mt-2 mb-8">
              {categoryLabels.map((cat, idx) => (
                <Button
                  key={idx}
                  variant={cat == category ? "default" : "outline"}
                  className={cn(
                    cat === category ? "text-white" : "hover:text-white",
                    "capitalize"
                  )}
                  // @ts-ignore
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              {!Boolean(filteredDocs.length) ? (
                <div className="flex items-center justify-center text-lg text-center w-full py-4">
                  Aucun Alumni pour la catégorie sélectionnée
                </div>
              ) : (
                filteredDocs.sort((a, b) => {
                  const dateA = new Date(a.createdAt).getTime(); 
                  const dateB = new Date(b.createdAt).getTime();
              
              
                  if (isNaN(dateA)) return 1;
                  if (isNaN(dateB)) return -1;
              
                  return dateB - dateA; 
                }).map((doc, idx) => (
                  <div key={idx} className="w-full md:w-[40%] lg:w-[30%]">
                    <AluminiView key={idx} doc={doc as IAlumini} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

const AluminiView = ({ doc }: { doc: IAlumini }) => {
  return (
    <div className="flex items-stretch justify-start m-2">
      <div className="flex flex-col">
        <div className="flex justify-start items-center gap-6">
          <div className="relative w-28 h-28 rounded-full ">
            <Image
              // @ts-ignore
              src={doc.src}
              className="rounded-full border-4 border-secondary"
              alt={doc.title}
              fill
              priority
            />
          </div>
          <div>
            <h2 className="font-semibold text-xl text-blue-950 capitalize">
              {doc.title}
            </h2>
            <p className="text-gray-500 text-sm capitalize">{doc.role}</p>
          </div>
        </div>

        <div className="mt-3 text-base">{doc.description}</div>
      </div>
    </div>
  );
};

export default Alumini;
