/* eslint-disable react/no-unescaped-entities */
import { commonImages } from "@/assets";
import Image from "next/image";
const MissionVision = () => {
  return (
    <div className={"relative mt-6"}>
      <div className="w-[400px] h-[400px] rounded-full bg-orange-300/20 absolute left-[-200px] top-0"></div>

      <div className="max-w-screen-2xl flex md:w-[85%] mx-auto px-4 w-full items-center gap-6 flex-col lg:flex-row justify-center py-4">
        <div className={"border-dashed border-4 p-3 border-secondary"}>
          <div
            className={"w-10 relative flex justify-center items-center mb-4"}
          >
            <Image
              fill
              priority
              className={"w-full object -cover"}
              src={commonImages.bulb}
              alt={"Mission"}
            />
          </div>
          <h3 className={"font-semibold text-3xl md:text-3xl pb-3"}>Mission</h3>
          <div className={"text-lg text-justify pb-2"}>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
        </div>
        <div className={"border-dashed border-4 p-3 border-secondary"}>
          <div
            className={"w-10 flex relative justify-center items-center mb-4"}
          >
            <Image
              fill
              priority
              className={"w-full object -cover"}
              src={commonImages.bulb}
              alt={"Mission"}
            />
          </div>
          <h3 className={"font-semibold text-3xl md:text-3xl pb-3"}>Vision</h3>
          <div className={"text-lg text-justify pb-2"}>
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
