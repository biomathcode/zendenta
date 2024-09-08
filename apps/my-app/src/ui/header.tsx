import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";
import { BiChevronDown, BiQuestionMark } from "react-icons/bi";
import { BsGearWideConnected } from "react-icons/bs";
import { CiWavePulse1 } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { PiPlus, PiPlusCircle } from "react-icons/pi";
import Hr from "./hr";
import Label from "./label";

const AvatarCard = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Image
        src={"/Avatar.avif"}
        alt="Avatar Logo"
        width={40}
        height={40}
        className=" rounded-full"
      />
      <div className="flex flex-col gap-1 leading-none items-center">
        <h1 className=" line-clamp-1 tracking-tight">Pratik Sharma</h1>
        <Label isCapital={false}>Super Admin</Label>
      </div>
      <div>
        <BiChevronDown />
      </div>
    </div>
  );
};

const routes = [
  "Dashboard",
  "Reservations",
  "Patients",
  "Treatments",

  "StaffList",

  "Account",
  "Sales",
  "Purchase",
  "Payment Methods",

  "Stocks",
  "Peripherals",
];

type RouteType = (typeof routes)[number];

function Header({
  type,
}: {
  type:
    | "Dashboard"
    | "Reservations"
    | "Patients"
    | "Treatments"
    | "StaffList"
    | "Account"
    | "Sales"
    | "Purchase"
    | "Payment Methods"
    | "Stocks"
    | "Peripherals"
    | "Report"
    | "Support";
}) {
  return (
    <header className=" border-b-[1px] border-neutral-300 h-[60px] py-4 px-8 bg-white w-full flex gap-4 justify-between ">
      <h1 className=" text-xl font-semibold text-slate-700">{type}</h1>
      <div className=" flex gap-8 justify-evenly">
        <form className="flex gap-2 items-center justify-center">
          <label className="relative">
            <span>
              <IoSearch
                size={24}
                className="absolute top-[10px] left-2 text-neutral-300"
              />
            </span>
            <input
              placeholder="Search for anything here..."
              className=" bg-neutral-100 rounded-full px-4 pl-8 py-2 border-2 border-neutral-200 min-w-80  "
            ></input>
          </label>

          <button className=" flex justify-center items-center p-2 bg-indigo-500 rounded-full">
            {" "}
            <PiPlus size={24} className=" font-bold text-white" />{" "}
          </button>
        </form>
        <div className="flex gap-2 items-center">
          <button className=" p-2 hover:bg-neutral-200 flex justify-center items-center rounded-full">
            <BiQuestionMark className=" text-neutral-400" size={20} />
          </button>
          <button className=" p-2 hover:bg-neutral-200 flex justify-center items-center rounded-full">
            <CiWavePulse1
              className=" text-neutral-400"
              strokeWidth="1"
              size={20}
            />
          </button>
          <button className=" p-2 hover:bg-neutral-200 flex justify-center items-center rounded-full">
            <BsGearWideConnected className=" text-neutral-400" size={20} />
          </button>
        </div>
        <Hr direction="vertical" size="xs" />
        <AvatarCard />
      </div>
    </header>
  );
}

export default Header;
