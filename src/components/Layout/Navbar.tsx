import { MdMenu } from "react-icons/md";
import React from "react";

import { commonImages } from "../../assets";
import { NavMenu, SearchBar, Sidebar } from "./index";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
import Image from "next/image";
import MdOutlineClose from "react-icons/md";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="max-w-screen">
      <div className={`font-[Poppins] bg-white shadow-lg`}>
        <header className="bg-white z-50 max-w-screen-2xl mx-auto">
          <nav className="flex justify-between items-center w-[95%]  mx-auto">
            <Link href="/">
              <div className="flex items-center justify-center -ml-2">
                <div
                  className={
                    "flex items-center justify-between relative w-20 h-20"
                  }
                >
                  <Image
                    fill
                    className="w-30 cursor-pointer"
                    src={commonImages.logo}
                    alt="..."
                  />
                </div>
                <p className={"font-semibold text-lg block lg:block"}>
                  CEAS-GRNE
                </p>
              </div>
            </Link>

            <div className="hidden md:flex">
              <NavMenu />
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <div className={"flex justify-center items-center gap-6 pt-3"}>
                  <LanguageSwitcher />
                </div>
              </div>

              <div className={"lg:hidden"}>
                <Sidebar />
              </div>
            </div>
          </nav>
        </header>
        <div
          className={
            "hidden md:flex justify-center items-center gap-6 pt-3 border-t pb-2 border-gray-700"
          }
        >
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
