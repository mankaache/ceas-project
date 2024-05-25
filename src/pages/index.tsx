import {
  BaseLayout,
  HomeCarousel,
  SectionFive,
  SectionFour,
  SectionThree,
  SectionTwo,
} from "@/components";

const Home = () => {
  return (
    <BaseLayout>
      <div
        className={
          // "h-[55vh] md:h-[60vh] lg:h-[75vh] xl:h-[78vh] 2xl:h-[75vh] w-full"
          "h-[55vh] md:h-[60vh] lg:h-[calc(100vh-150px)] xl:h-[calc(100vh-150px)] 2xl:h-[75vh] w-full"
        }
      >
        <HomeCarousel />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <div className={"bg-blue-900  w-full  py-10 "}>
        <div
          className={
            "w-[80%] md:w-[90%] max-w-screen-2xl mx-auto flex items-center justify-center gap-12 lg:flex-row flex-col"
          }
        >
          <div
            className={
              "flex items-center justify-center flex-1 text-2xl md:text-2xl text-center text-base-color font  font-semibold"
            }
          >
            Sign up to our news letter and get latest updates about our
            activites, events and many more
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-md p-0">
              <div className="w-full rounded-full bg-white/100 p-2 border border-gray-800 flex items-center justify-center">
                <input
                  className="pl-2 w-full bg-transparent text-black placeholder:text-black/50  outline-none"
                  placeholder="Your Email address"
                />
                <button className="rounded-full text-white bg-primary p-2 w-[10rem]">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
