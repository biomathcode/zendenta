"use client";

import { PropsWithChildren, useState } from "react";

function Nav({ children }: PropsWithChildren) {
  const [width, setWidth] = useState("280px");
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
          if (width === "280px") setWidth("80px");
          else setWidth("280px");
        }}
        className=" absolute -right-5 top-2 border-2 border-neutral-300 px-3 py-1 bg-white rounded-full text-lg"
      >
        {width === "280px" ? "<" : ">"}
      </button>
    </nav>
  );
}

export default Nav;
