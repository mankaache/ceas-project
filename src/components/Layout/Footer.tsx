import { commonImages } from "../../assets";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  const { pathname } = router;

  return (
    <div className={`bg-accent w-full py-12`}>
      <div className="max-w-screen-2xl w-[90%] mx-auto px-4 flex flex-col md:flex-row gap-5 md:gap-12 justify-start items-start ">
        <div className="relative h-[200px] aspect-square flex items-center justify-center">
          <Image
            src={commonImages.logo}
            fill
            alt={"logo"}
            className={"size-52"}
          />
        </div>

        <div className={"w-full px-6"}>
          <div
            className={
              "flex flex-col sm:flex-row justify-center w-full sm:justify-between sm:items-start  border-b border-white"
            }
          >
            <div className={"space-y-1 *:block *:py-3 *:text-xl *:text-white"}>
              <Link href={"/about"}>About us</Link>
              <Link href={"/training-programs"}>Training programs</Link>
              <Link href={"/"}>Admission</Link>
              <Link href={"/news"}>News</Link>
            </div>

            <div className={"space-y-1 *:block *:py-3 *:text-xl *:text-white"}>
              <Link href={"/"}>Privacy policy</Link>
              <Link href={"/"}>Terms of conditions</Link>
            </div>
            <div className={"space-y-1 *:block *:py-3 *:text-xl *:text-white"}>
              <Link href={"/"}>FAQs</Link>
              <Link href={"/contact"}>Contact Us</Link>
            </div>
          </div>
          <div
            className={
              "flex flex-col md:flex-row gap-5 justify-between items-center py-7"
            }
          >
            <p className={"text-white text-lg w-full"}>
              © 2024. All rights reserved by {process.env.NEXT_PUBLIC_SITE_NAME}
            </p>
            <div
              className={
                "flex justify-center items-center gap-5 *:w-8 *:h-8 *:bg-white *:rounded-lg *:text-[#444] *:flex *:justify-center *:items-center"
              }
            >
              <div>
                <FaFacebookF size={24} />
              </div>
              <div>
                <FiInstagram size={24} />
              </div>
              <div>
                <FaLinkedinIn size={24} />
              </div>
              <div>
                <FaXTwitter size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
