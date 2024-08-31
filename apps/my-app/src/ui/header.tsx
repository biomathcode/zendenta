import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return (
    <header className=" border-b-2 border-neutral-300 h-[60px] bg-white w-full">
      {children}
    </header>
  );
}

export default Header;
