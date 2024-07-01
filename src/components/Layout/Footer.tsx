import { commonImages } from "../../assets";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

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
              <Link href={"/about"}>À propos de nous</Link>
              <Link href={"/training-programs"}>Programmes de formation</Link>
              <Link href={"/news/admission"}>Admission</Link>
              <Link href={"/"}>Platforme E-learning</Link>
            </div>

            <div className={"space-y-1 *:block *:py-3 *:text-xl *:text-white"}>
              <Link href={"/media/videos"}>Videos</Link>
              <Link href={"/media/photos"}>Photos</Link>
              <Link href={"/media/articles"}>Articles</Link>
              <Link href={"/media/documents"}>Documents</Link>
             
            </div>
            <div className={"space-y-1 *:block *:py-3 *:text-xl *:text-white"}>
            <Link
                href={process.env.NEXT_PUBLIC_ADMIN_DASHBOARD_URL as string}
              >
                Connexion
              </Link>
              <Link href={"/contact"}>Contactez-nous</Link>
            </div>
          </div>
          <div
            className={
              "flex flex-col md:flex-row gap-5 justify-between items-center py-7"
            }
          >
            <p className={"text-white text-lg w-full"}>
              © {dayjs().format("YYYY")}. Tous droits réservés par{" "}
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </p>
            <div
              className={
                "flex justify-center items-center gap-5 *:w-8 *:h-8 *:bg-white *:rounded-lg *:text-[#444] *:flex *:justify-center *:items-center"
              }
            >
              <Link
                href={
                  "https://www.facebook.com/centredexcellenceetdapplication"
                }
              >
                <FaFacebookF size={24} />
              </Link>
              <Link href={"https://www.linkedin.com/company/ceas-grne/"}>
                <FaLinkedinIn size={24} />
              </Link>
              <Link
                href={"https://x.com/CeasGrne?t=GHyUwGT8UW8zGq94DadRNQ&s=08"}
              >
                <FaXTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
