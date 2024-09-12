"use client";

import { useNav } from "@/hooks/useNavOpen";
import { PropsWithChildren, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import {
  FaAngleLeft,
  FaAngleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Nav({ children }: PropsWithChildren) {
  const { width, toggleNav } = useNav();

  return (
    <nav
      style={{
        width,
      }}
      className=" relative rounded-l-[3.5rem] px-4  transition-transform ease-in duration-300 h-screen bg-[#f9fafb] "
    >
      {children}
      <button
        onClick={() => {
          toggleNav();
        }}
        className=" absolute -right-5 top-2 border-2 border-neutral-300 px-3 py-1 bg-white rounded-full text-lg"
      >
        {width === "280px" ? (
          <FaChevronLeft className="text-neutral-400" />
        ) : (
          <FaChevronRight />
        )}
      </button>
    </nav>
  );
}

export default Nav;
