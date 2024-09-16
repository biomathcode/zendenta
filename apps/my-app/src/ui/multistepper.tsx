// would have three state
// incomplete, progress, and completed

// 1.Add Patient for waiting list
// 2. Medical Checkup
// 3. Add Medical Record => report => summary Treatment => finish Treatment

// 4. Add Treatment
// 5.

import { PropsWithChildren, ReactNode } from "react";
import Label from "./label";
import { FaTooth } from "react-icons/fa";
import { PiReceiptFill } from "react-icons/pi";
import { MdOutlineHome } from "react-icons/md";

function Step() {
  return <div className="flex justify-center text-center flex-col"></div>;
}

function Progress({ progress }: { progress: number }) {
  return (
    <div className="relative w-[40px] h-1 rounded bg-neutral-200 ">
      <div
        className="  absolute left-0 h-1 rounded bg-indigo-500 "
        style={{
          width: progress + "%",
        }}
      ></div>
    </div>
  );
}

export function MultiStep({
  steps = [
    {
      id: 1,
      label: "Treatment & Dentist",
      icon: (
        <div className=" p-2 rounded-full border">
          <FaTooth />
        </div>
      ),
    },
    {
      id: 2,
      label: "Basic Information",
      icon: (
        <div className="p-2 rounded-full border">
          <PiReceiptFill />
        </div>
      ),
    },
    {
      id: 3,
      label: "Oral Hygiene habits",
      icon: (
        <div className="p-2 rounded-full border">
          <MdOutlineHome />
        </div>
      ),
    },
  ],
}: {
  steps?: {
    id: number;
    label: string;
    icon: ReactNode;
  }[];
}) {
  return (
    <div className="flex gap-2">
      {steps.map((e) => (
        <div key={e.id} className="flex  items-center">
          <div className="flex flex-col items-center  text-nowrap">
            <div>{e.icon}</div>
            <Label isCapital={true}>
              {`Step 
              ${e.id}`}
            </Label>
            <div className=" font-semibold text-sm">{e.label}</div>
          </div>
          {steps.length !== e.id && <Progress progress={(20 / 40) * 100} />}
        </div>
      ))}
      <Step />
    </div>
  );
}
