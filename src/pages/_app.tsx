import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>

    </div>
  

);
}
