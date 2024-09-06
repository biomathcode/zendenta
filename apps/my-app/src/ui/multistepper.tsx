// would have three state
// incomplete, progress, and completed

import { PropsWithChildren } from "react";

function Step() {
  return <div className="flex justify-center text-center flex-col"></div>;
}

function Progress({ progress }: { progress: number }) {
  return (
    <div className=" w-[400px] rounded bg-neutral-200 ">
      <div
        className=" rounded bg-blue-600 "
        style={{
          width: progress + "%",
        }}
      ></div>
    </div>
  );
}

function MultiStep() {
  return <div className="flex gap-2"></div>;
}
