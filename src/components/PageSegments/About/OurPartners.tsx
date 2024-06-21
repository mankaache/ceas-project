import { commonImages } from "@/assets";
import Image from "next/image";

const OurPartners = () => {
  return (
    <div className="mt-20 md:mt-20">
      <h3 className="mb-4 text-center text-primary font-semibold text-3xl">
        Rencontrez nos partenaires
      </h3>
      <div className="bg-secondary/10 py-10 mt-5">
        <div className="w-[90%] md:w-[80=5%] max-w-screen-2xl mx-auto flex-wrap  flex items-center gap-8 justify-center">
          {[
            commonImages.partner1,
            commonImages.partner2,
            commonImages.partner3,
          ].map((partner, idx) => (
            <div
              key={idx}
              className="relative w-[150px] md:w-[200px] aspect-square flex justify-center items-center rounded-full"
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
