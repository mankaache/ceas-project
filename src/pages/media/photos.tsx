import { BaseLayout } from "@/components";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Photos = () => {
  const [category, setCategory] = React.useState<
    "community" | "environment" | "all"
  >("all");

  const PHOTOSObj: {
    src: string;
    alt?: string;
    category: "community" | "environment" | "all";
  }[] = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      alt: "image",
      category: "community",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      alt: "image",
      category: "community",
    },
    {
      src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
      alt: "image",
      category: "community",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      alt: "image",
      category: "environment",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      alt: "image",
      category: "community",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      alt: "image",
      category: "community",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      alt: "image",
      category: "environment",
    },
  ];

  const PHOTOS = React.useMemo(() => PHOTOSObj, []);

  const filteredPhotos = React.useMemo(() => {
    return PHOTOS.filter((photo) => {
      if (category === "all") {
        return true;
      }
      if (category === photo.category) {
        return true;
      }
      return false;
    });
  }, [category, PHOTOS]);

  //   const images = React.useMemo(() => {
  //     return filteredPhotos.map(({ src }) => ({
  //       src,
  //     }));
  //   }, [category]);

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

  return (
    <BaseLayout>
      <div className="w-full">
        <div className="w-full max-w-screen-2xl h-full px-2 md:px-4 py-4 mx-auto">
          <div className="docs bg-gray-50 h-full p-4 rounded-lg border shadow-md w-full mx-auto">
            <h1 className="title text-3xl text-center mb-2 font-poppins">
              Photos
            </h1>
            <p className="p-2">Categories</p>
            <div className="categories flex flex-wrap gap-2 mt-2 mb-8">
              {["all", "community", "environment"].map((cat, idx) => (
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

            <div className="flex flex-wrap gap-4">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="image rounded-lg hover:scale-[0.98] duration-300 relative border w-full md:w-[49%] lg:w-[32%] aspect-square max-h-[250px] xl:max-h-[300px] cursor-pointer"
                  onClick={() => handleClick(idx, photo)}
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
              ))}
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
