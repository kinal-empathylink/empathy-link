"use client";

import React, { useEffect, useState } from "react";

import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import kinalImg from "@/public/Images/KINAL_NAV.webp";

const montserrat = Montserrat({
  weight: "500",
  style: "normal",
  subsets: ["latin"],
});

const NavBar = () => {
  const [navPosition, setNavPosition] = useState("absolute py-5 px-6");
  const [textClass, setTextClass] = useState(
    "text-blue-100 text-2xl font-medium"
  );
  const [title, setTilte] = useState("opacity-0");

  useEffect(() => {
    const handlScroll = () => {
      if (window.scrollY > 0) {
        setNavPosition(
          "fixed p-4 bg-black/50 backdrop-blur-md backdrop-saturate-200"
        );
        setTextClass("text-white text-xl");
        setTilte("text-white text-xl");
      } else {
        setNavPosition("absolute py-5 px-6");
        setTextClass("text-blue-100 text-2xl font-medium");
        setTilte("opacity-0");
      }
    };

    window.addEventListener("scroll", handlScroll);

    return () => {
      window.removeEventListener("scroll", handlScroll);
    };
  }, []);

  return (
    <nav
      className={`${navPosition} transition-all top-0 inset-x-0 z-50 w-full`}
    >
      <ul className="flex justify-between items-center w-full">
        <li>
          <Image src={kinalImg} width={150} height={150} alt="Kinal Empathy" />
        </li>
        <li className={`${montserrat.className} ${title}`}>
          KINAL EMPATHY LINK
        </li>
        <li className={`${montserrat.className} ${textClass}`}>
          <Link href="/home/Report">REPORTES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
