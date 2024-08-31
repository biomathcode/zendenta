import { ClinicIcon } from "./icons";

function ClinicDisplay({
  name = "Avicena Clinic",
  address = "845 Euclid Avenue, CA",
}: {
  name?: string;
  address?: string;
}) {
  return (
    <div className=" border-[2px] border-neutral-300 rounded-xl flex gap-4 px-2 py-2  justify-start items-center ">
      <div>
        <ClinicIcon />
      </div>
      <div className=" text-xs flex flex-col justify-center ">
        <div className=" text-slate-600 font-bold">{name}</div>
        <p className=" line-clamp-1 text-slate-400">{address}</p>
      </div>
    </div>
  );
}

export default ClinicDisplay;
