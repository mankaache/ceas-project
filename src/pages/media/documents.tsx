import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

const Documents = () => {
  const [category, setCategory] = React.useState<
    "documentation" | "report" | "journal" | "all"
  >("all");
  const DOCS: {
    title: string;
    description: string;
    href: string;
    category: "documentation" | "report" | "journal" | "all";
  }[] = [
    {
      title: "Document 1",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum",
      href: "https://www.google.com",
      category: "documentation",
    },

    {
      title: "Document 2",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum",
      href: "https://www.google.com",
      category: "report",
    },

    {
      title: "Document 3",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum",
      href: "https://www.google.com",
      category: "journal",
    },

    {
      title: "Document 4",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum",
      href: "https://www.google.com",
      category: "documentation",
    },

    {
      title:
        "Document 5 has a really really really long title which wont stop being long enough",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum",
      href: "https://www.google.com",
      category: "documentation",
    },
  ];

  const filteredDocs = React.useMemo(() => {
    return DOCS.filter((doc) => {
      if (category === "all") {
        return true;
      }
      if (category === doc.category) {
        return true;
      }
      return false;
    });
  }, [category]);
  return (
    <BaseLayout>
      <div className="w-full">
        <div className="w-full max-w-screen-2xl h-full px-2 md:px-4 py-4 mx-auto">
          <div className="docs bg-gray-50 h-full p-4 rounded-lg border shadow-md w-full mx-auto">
            <h1 className="title text-3xl text-center mb-2 font-poppins">
              Documents
            </h1>
            <p className="p-2">Categories</p>
            <div className="categories flex flex-wrap gap-2 mt-2 mb-8">
              {["all", "documentation", "report", "journal", "other"].map(
                (cat, idx) => (
                  <Button
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
                )
              )}
            </div>

            <div className="flex flex-wrap gap-6">
              {filteredDocs.map((doc, idx) => (
                <div className="w-full md:w-[48%]">
                  <DocumentView key={idx} doc={doc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

const DocumentView = ({
  doc,
}: {
  doc: {
    title: string;
    description?: string;
    href: string;
    category: "documentation" | "report" | "journal" | "all";
  };
}) => {
  return (
    <div className="flex items-stretch justify-start m-2">
      <div className="icon border-r">
        <IoDocumentTextOutline color="#AB0000" size={50} />
      </div>
      <div className="doc w-full px-2 flex flex-col gap-1 items-start justify-center">
        <div className="w-full flex flex-row items-center justify-between pb-1">
          <div className="title text-base font-semibold">{doc.title}</div>
          <Button
            variant="outline"
            className="hidden lg:flex items-center justify-center gap-2 border border-primary text-primary"
          >
            <FaDownload /> Download
          </Button>
        </div>

        <div className="description text-sm">{doc?.description}</div>

        <Button
          variant="outline"
          className="flex lg:hidden items-center justify-center gap-2 border border-primary mt-2"
        >
          <FaDownload /> Download
        </Button>
      </div>
    </div>
  );
};

export default Documents;
