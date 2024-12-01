import { BaseLayout } from "@/components";
import { InnerPageError } from "@/components/errors";
import { InnerPageLoader } from "@/components/loaders";
import { Button } from "@/components/ui/button";
import { firestore } from "@/firebase/config";
import { useSubcategories } from "@/firebase/helpers";
import { cn } from "@/lib/utils";
import { collection, doc, query } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { FaDownload } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Photos = () => {
  const [category, setCategory] = React.useState("");

  const [categories, catLoading, catError] = useSubcategories("photos");
  const [photos, loading, error] = useCollectionData(
    collection(firestore, "photos")
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

  const filteredPhotos = React.useMemo(() => {
    return (
      photos?.reverse().filter((photo) => {
        // if (category === "tout") {
        //   return true;
        // }
        if (category === photo.category) {
          return true;
        }
        return false;
      }) || []
    );
  }, [category, photos]);

  const [index, setIndex] = React.useState(-1);

  const currentImage = filteredPhotos[index];
  const nextIndex = (index + 1) % filteredPhotos.length;
  const nextImage = filteredPhotos[nextIndex] || currentImage;
  const prevIndex = (index + filteredPhotos.length - 1) % filteredPhotos.length;
  const prevImage = filteredPhotos[prevIndex] || currentImage;

  const handleClick = (index: number, item: { src: string }) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  if (loading) return <InnerPageLoader loading={loading} />;

  if (error) return <InnerPageError error={error} />;

  return (
    <BaseLayout>
      <div className="w-full  mb-20">
        <div className="w-full max-w-screen-2xl h-full px-2 md:px-4 py-4 mx-auto">
          <div className="docs bg-gray-50 h-full p-4 rounded-lg border shadow-md w-full mx-auto">
            <h1 className="title text-3xl text-center mb-2 font-poppins">
              Photos
            </h1>
            <p className="p-2"></p>
            <div className="categories flex flex-wrap gap-2 mt-2 mb-8">
              {categoryLabels?.map((cat, idx) => (
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

            <div className="flex flex-wrap justify-center sm:justify-start items-stretch sm:items-start w-full gap-4">
              {!Boolean(filteredPhotos.length) ? (
                <div className="flex items-center justify-center text-lg text-center w-full py-4">
                  Aucune photo pour la catégorie sélectionnée
                </div>
              ) : (
                filteredPhotos
                .sort((a, b) => {
                  const dateA = new Date(a.createdAt).getTime(); 
                  const dateB = new Date(b.createdAt).getTime();
              
              
                  if (isNaN(dateA)) return 1;
                  if (isNaN(dateB)) return -1;
              
                  return dateB - dateA; 
                })
                .map((photo, idx) => (
                  <div key={idx} className="w-full sm:w-auto">
                    <div className=" sm:w-[16em]">
                    <div
                      className="rounded-lg hover:scale-[0.98] duration-300 relative border aspect-square cursor-pointer "
                      onClick={() => handleClick(idx, photo.src)}
                    >
                      <Image
                        src={photo.src}
                        fill
                        alt={photo?.alt ?? ""}
                        objectFit=""
                        style={{
                          borderRadius: 6,
                        }}
                      />
                    </div>
                    <p className="w-full text-white bg-primary p-3 rounded-bl-xl rounded-br-xl">
                      {photo.caption}
                    </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {!!currentImage && (
              <Lightbox
                mainSrc={currentImage.src}
                imageTitle={currentImage.alt}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.src}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.src}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
              />
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Photos;
