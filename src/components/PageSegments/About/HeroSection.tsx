import { commonImages } from "@/assets";

const HeroSection = () => {
  return (
    <div
      className={
        "h-[55vh] md:h-[60vh] lg:h-[calc(100vh-150px)] xl:h-[calc(100vh-150px)] 2xl:h-[75vh] w-full bg-center bg-cover bg-no-repeat flex justify-center items-center"
      }
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${commonImages.Aboutus4.src})`,
        boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.2)",
        backgroundBlendMode: "darken",
      }}
    >
      <p className={"text-white text-3xl font-bold"}>À propos de nous</p>
    </div>
  );
};

export default HeroSection;
