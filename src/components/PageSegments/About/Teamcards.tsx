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


const Teamcards = () => {
  const [category, setCategory] = React.useState("tout");

  const [categories, catLoading, catError] = useSubcategories("alumini");
  const [alumini, loading, error] = useCollectionData(
    collection(firestore, "alumini")
  );

  const categoryLabels = React.useMemo(() => {
    const categoriesSet: Set<string> = new Set();

    categoriesSet.add("tout");

    return Array.from(categoriesSet);
  }, []);

  const filteredDocs = React.useMemo(() => {
    return (
      alumini?.filter((alumini) => {
        if (category === "tout") {
          return true;
        }
        return false;
      }) || []
    );
  }, [category, alumini]);

//   if (loading) return <InnerPageLoader loading={loading} />;

//   if (error) return <InnerPageError error={error} />;

  return (

      <div className="w-full">
        <div className="w-full max-w-screen-2xl h-full px-2 md:px-4 py-4 mx-auto">
          <div className="">
       
            <div className="categories  flex-wrap gap-2 mt-2 mb-8 hidden">
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
                  
                </div>
              ) : (
                filteredDocs.map((doc, idx) => (
                  <div key={idx} className="w-full md:w-[40%] lg:w-[30%]">
                    <AluminiView key={idx} doc={doc as IAlumini} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

  );
};

const AluminiView = ({ doc }: { doc: IAlumini }) => {
  return (
    <div className="flex items-stretch justify-start m-2">
      <div className="flex flex-col">
        <div className="flex justify-start items-center gap-8">
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

export default Teamcards;
