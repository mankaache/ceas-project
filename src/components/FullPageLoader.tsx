import { commonImages } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
// import ClipLoader from "react-spinners/ClipLoader";

const FullPageLoader = () => {
  return (
    <div className="w-full max-w-7xl h-screen">
      <div className="flex items-center justify-center h-[80%] lg:h-full w-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="splash-image">
            {/* image  */}
            <div className="logo animate-pulse flex items-center justify-center w-[250px] h-[150px] p-2">
              <Image
                src={commonImages.logo}
                alt="ceas logo"
                style={{ objectFit: "contain" }}
                priority
                placeholder="blur"
              />
            </div>
            {/* image  */}
          </div>
          {/* loader  */}

          {/* loader  */}
          <div className="splash-loader relative mt-4">
            <div className="loader-outter animate-spin border border-black border-t-0 border-r-1 rounded-full w-10 h-10 relative flex items-center justify-center"></div>
            <div className="loader-inner animate-spin-reverse border border-black border-t-0 border-r-1 rounded-full w-6 h-6 absolute top-2  left-2"></div>
          </div>

          <div className="logger">
            {/* <p className="text-sm text-slate-400">{logger}</p> */}
          </div>
          {/* loader  */}
        </div>
      </div>
    </div>
  );
};

export default FullPageLoader;
