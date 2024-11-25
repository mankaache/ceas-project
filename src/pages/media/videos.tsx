import { BaseLayout } from "@/components";
import { InnerPageError } from "@/components/errors";
import { InnerPageLoader } from "@/components/loaders";
import { Button } from "@/components/ui/button";
import { firestore } from "@/firebase/config";
import { useSubcategories } from "@/firebase/helpers";
import { cn } from "@/lib/utils";
import { collection } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import "react-image-lightbox/style.css";

const Videos = () => {
  const [category, setCategory] = React.useState("");

  const [categories, catLoading, catError] = useSubcategories("videos");
  const [videos, loading, error] = useCollectionData(
    collection(firestore, "videos")
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

  const filteredVideos = React.useMemo(() => {
    return (
      videos?.filter((video) => {
        // if (category === "tout") {
        //   return true;
        // }
        if (category === video.category) {
          return true;
        }
        return false;
      }) || []
    );
  }, [category, videos]);

  if (loading) return <InnerPageLoader loading={loading} />;

  if (error) return <InnerPageError error={error} />;

  return (
    <BaseLayout>
      <div className="w-full">
        <div className="w-full max-w-screen-2xl h-full px-2 md:px-4 py-4 mx-auto">
          <div className="docs bg-gray-50 h-full p-4 rounded-lg border shadow-md w-full mx-auto">
            <h1 className="title text-3xl text-center mb-2 font-poppins">
              Videos
            </h1>
            <p className="p-2">Catégories</p>
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

            <div className="flex flex-wrap gap-2">
              {!Boolean(filteredVideos.length) ? (
                <div className="flex items-center justify-center text-lg text-center w-full py-4">
                  Aucune video pour la catégorie sélectionnée
                </div>
              ) : (
                filteredVideos?.sort((a, b) => {
                  const dateA = new Date(a.createdAt).getTime(); 
                  const dateB = new Date(b.createdAt).getTime();
              
              
                  if (isNaN(dateA)) return 1;
                  if (isNaN(dateB)) return -1;
              
                  return dateB - dateA; 
                }).map((video, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg hover:scale-[0.99] duration-300 relative w-full md:w-[49%] lg:w-[32%] aspect-square max-h-[250px] xl:max-h-[300px] cursor-pointer"
                  >
                    <video
                      src={video.src}
                      // poster={poster}
                      // width={width}
                      // height={height}
                      controls={true}
                      autoPlay={false}
                      // loop={loop}
                      // muted={muted}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="info text-white bg-primary p-4 ">
                      <p className="tite font-bold text-lg">{video.title}</p>
                      <p className="tite mt-2">{video.description}</p>
                    </div>
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

export default Videos;
