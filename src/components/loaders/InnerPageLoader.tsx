import { commonImages } from "@/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SyncLoader } from "react-spinners";

const InnerPageLoader = ({ loading }: { loading: boolean }) => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center h-[80%] lg:h-full w-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="splash-loader relative text-blue-500">
            <SyncLoader
              color="#A9BF16"
              loading={loading}
              // size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>

          <div className="logger">
            <p className="text-sm text-slate-400">
              S&apos;il vous plaît, attendez...
            </p>
          </div>
          {/* loader  */}
        </div>
      </div>
    </div>
  );
};

export default InnerPageLoader;
