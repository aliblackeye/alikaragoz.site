"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      document.documentElement.classList.add(theme);
    }
  }, []);

  return (
    <>
      <div className="top-bg">
        <Image
          src={"/top.png"}
          alt="top"
          width={1}
          height={1}
        />
      </div>
      {children}
      <div className="bottom-bg">
        <Image
          src={"/bottom.png"}
          alt="bottom"
          width={1}
          height={1}
        />
        <footer className="footer text-gray-600 ">
          <h1 className="text-center mb-4 font-normal">aliblackeye</h1>
          <div className="socials flex gap-4 text-xs font-bold">
            <Link href={"https://instagram.com/aliblackeye"}>instagram</Link>
            <Link href={"https://linkedin.com/in/aliblackeye"}>linkedin</Link>
            <Link href={"https://youtube.com/aliblackeye"}>youtube</Link>
            <Link href={"https://github.com/aliblackeye"}>github</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
