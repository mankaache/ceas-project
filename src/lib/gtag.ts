// lib/gtag.js

import ReactGA from "react-ga4";

const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string;

export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize(measurementId);
};

export const logPageView = (url: string) => {
  console.log(`Logging pageview for ${url}`);
  ReactGA.send({ hitType: "pageview", page: url });
};
