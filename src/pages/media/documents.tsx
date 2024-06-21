import { BaseLayout } from "@/components";
import { InnerPageError } from "@/components/errors";
import { InnerPageLoader } from "@/components/loaders";
import { Button } from "@/components/ui/button";
import { firestore } from "@/firebase/config";
import { useSubcategories } from "@/firebase/helpers";
import { cn } from "@/lib/utils";
import { IDocument } from "@/models";
import { collection } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FaDownload } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

const Documents = () => {
  const [category, setCategory] = React.useState("tout");

  const [categories, catLoading, catError] = useSubcategories("documents");
  const [documents, loading, error] = useCollectionData(
    collection(firestore, "documents")
  );

  const categoryLabels = React.useMemo(() => {
    const categoriesSet: Set<string> = new Set();

    categoriesSet.add("tout");

    categories?.forEach((category) => {
      categoriesSet.add(category.label);
    });

    return Array.from(categoriesSet);
  }, [categories]);

  const filteredDocs = React.useMemo(() => {
    return (
      documents?.filter((document) => {
        if (category === "tout") {
          return true;
        }
        if (category === document.category) {
          return true;
        }
        return false;
      }) || []
    );
  }, [category, documents]);

  if (loading) return <InnerPageLoader loading={loading} />;

  if (error) return <InnerPageError error={error} />;

  return (
    <BaseLayout>
      <div className="w-full">
        <div className="w-full max-w-screen-2xl h-full px-2 md:px-4 py-4 mx-auto">
          <div className="docs bg-gray-50 h-full p-4 rounded-lg border shadow-md w-full mx-auto">
            <h1 className="title text-3xl text-center mb-2 font-poppins">
              Documents
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
                  Aucun document pour la catégorie sélectionnée
                </div>
              ) : (
                filteredDocs.map((doc, idx) => (
                  <div key={idx} className="w-full md:w-[48%]">
                    <DocumentView key={idx} doc={doc as IDocument} />
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

const DocumentView = ({ doc }: { doc: IDocument }) => {
  return (
    <div className="flex items-stretch justify-start m-2">
      <div className="icon border-r">
        <IoDocumentTextOutline color="#AB0000" size={50} />
      </div>
      <div className="doc w-full px-2 flex flex-col gap-1 items-start justify-center">
        <div className="w-full flex flex-row items-center justify-between pb-1">
          <div className="title text-base font-semibold">{doc.title}</div>
          <a href={doc.src}>
            <Button
              variant="outline"
              className="hidden lg:flex hover:text-white items-center justify-center gap-2 border border-primary text-primary"
            >
              <FaDownload /> Télécharger
            </Button>
          </a>
        </div>

        <div className="description text-sm">{doc?.description}</div>

        <a href={doc.src} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="flex lg:hidden hover:text-white items-center justify-center gap-2 border border-primary mt-2"
          >
            <FaDownload /> Télécharger
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Documents;
