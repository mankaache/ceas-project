import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "animate.css";
import React from "react";
import AOS from "aos";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init({
      once: false,
      offset: 120,
      startEvent: "DOMContentLoaded",
      duration: 1000,
      delay: 400,
      mirror: true,
    });
  }, []);

  return (
    <div>
      <Component {...pageProps} />
      <ToastContainer theme="colored" />
    </div>
  );
}

export default appWithTranslation(App);
