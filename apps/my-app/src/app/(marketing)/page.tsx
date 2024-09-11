"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import MyDialog from "@/ui/dialog";
import { Drawer } from "vaul";
import Hr from "@/ui/hr";
import { IoCloseCircle } from "react-icons/io5";
import { BiRightArrow } from "react-icons/bi";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { MdOutlineKey, MdOutlineKeyboardArrowRight } from "react-icons/md";

function marketing() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div>
      <h1>Marketing</h1>
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      <MyDialog
        isNested={false}
        content={
          <div className=" bg-white relative rounded-3xl flex-1 max-h-[94%]">
            <Drawer.Title className=" py-4 px-8 font-medium text-lg mx-auto ">
              Medical Checkup
            </Drawer.Title>
            <Drawer.Close
              aria-label="Close"
              asChild
              className=" absolute right-6 top-4"
            >
              <button className=" bg-neutral-200 rounded-full p-1 ">
                <MdOutlineKeyboardArrowRight
                  className=" text-neutral-500"
                  size={20}
                />
              </button>
            </Drawer.Close>
            <Hr className=" min-w-full" direction="horizontal" size="full" />

            <div className="max-w-md mx-auto p-3">
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <div>
                <MyDialog isNested={true}>
                  <button>Open Second Dialog</button>
                </MyDialog>
              </div>
            </div>
          </div>
        }
      >
        <button>First Dialog</button>
      </MyDialog>
    </div>
  );
}

export default marketing;
