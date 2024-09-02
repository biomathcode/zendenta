"use client";

import { useNav } from "@/hooks/useNavOpen";
import { PropsWithChildren, useState } from "react";

function Nav({ children }: PropsWithChildren) {
  const { width, toggleNav } = useNav();

  return (
    <nav
      style={{
        width,
      }}
      className=" relative rounded-l-[3.5rem] px-4  transition-all ease-in duration-200  h-screen bg-[#f9fafb] "
    >
      {children}
      <button
        onClick={() => {
          toggleNav();
        }}
        className=" absolute -right-5 top-2 border-2 border-neutral-300 px-3 py-1 bg-white rounded-full text-lg"
      >
        {width === "280px" ? "<" : ">"}
      </button>
    </nav>
  );
}

export default Nav;
