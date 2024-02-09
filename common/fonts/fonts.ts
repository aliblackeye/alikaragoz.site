import localFont from "next/font/local";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Font files can be colocated inside of `app`
const satoshi = localFont({
  src: [
    {
      path: "./satoshi/Fonts/OTF/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./satoshi/Fonts/OTF/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./satoshi/Fonts/OTF/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./satoshi/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const fonts = {
  inter,
  satoshi,
};
