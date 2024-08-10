import { commonImages } from "@/assets";
import Image from "next/image";

const OurPartners = () => {
  return (
    <div className="mt-20 md:mt-40">
      <h3 className="mb-4 text-center text-primary font-semibold text-3xl">
        Rencontrez nos partenaires
      </h3>
      <div className=" bg-secondary/5 py-10 mt-10">
        <div className="w-[90%] md:w-[85%] max-w-screen-2xl mx-auto flex-wrap  flex items-center gap-8 justify-around">
          {[
            commonImages.partner1,
            commonImages.partner2,
            commonImages.partner3,
            commonImages.partner4,
            commonImages.partner5
          ].map((partner, idx) => (
            <div
              key={idx}
              className="relative w-[150px] md:w-[200px]  aspect-square flex justify-center items-center rounded-full"
            >
              <Image src={partner} alt="partner" fill objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
