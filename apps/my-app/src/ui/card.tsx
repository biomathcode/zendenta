import { BiChevronDown, BiDollarCircle } from "react-icons/bi";
import Label from "@/ui/label";
import Stats from "@/ui/stats";
import { MdLocalDining, MdUpcoming } from "react-icons/md";
import { BsFileCheck } from "react-icons/bs";
import { cva } from "class-variance-authority";
import { finished } from "stream";
import Chip from "./chip";
import Image from "next/image";

// props => color, icon, name, time, status => Registered, Encounter, Finished

//$
//Rafli Jainudin
//09:00 AM > 10:00 AM
//General Checkup
//• Finished

function CardChip({
  children,
  type,
}: {
  children: string;
  type: "finished" | "doing" | "registered";
}) {
  const colors = {
    finished: " bg-green-600",
    doing: " bg-yellow-500",
    registered: " bg-neutral-400",
  };

  return (
    <div className="flex gap-1 items-center h-8 bg-white px-2 border text-sm py-0 rounded-lg font-medium">
      <div className={`h-2 w-2 rounded-full` + colors[type]} />
      <div>{children}</div>
    </div>
  );
}

function icons() {
  const statusIcons = {
    loading: <MdUpcoming />,
    dollar: <BiDollarCircle />,
    tick: <BsFileCheck />,
  };

  return <div className=""></div>;
}

function CalendarEventCard({
  treatment = "General Checkup",
  status = "Finished",
  patient_name = "Rafli Jainudin",
  start_time = "09:00 AM",
  end_time = "10:00 AM",
}: {
  treatment?: string;
  status?: string;
  patient_name?: string;
  start_time?: string;
  end_time?: string;
}) {
  // user
  // Finished, Doing Treatment, Registered
  // General Checkup, Scaling, Extraction
  //
  return (
    <div className="flex gap-4 relative w-full justify-between rounded-xl max-w-lg bg-pink-100 max-h-32 px-4 py-2">
      <div className="flex gap-3 p-1">
        <div>
          <span className=" bg-pink-500 px-2 py-1 rounded-lg font-bold text-sm text-white h-4 w-6 ">
            $
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <div className=" font-semibold">{patient_name}</div>
          <div className="flex gap-1 text-neutral-500 leading-2 text-sm">
            <div>{start_time}</div>
            <div className=" ">{">"}</div>
            <div>{end_time}</div>
          </div>
          <div className=" mt-2 px-2 py-1 bg-white max-w-fit rounded-full border border-pink-200 text-sm font-medium">
            {treatment}
          </div>
        </div>
      </div>
      <CardChip type="registered">{status}</CardChip>
    </div>
  );
}

function DoctorCard() {
  return <div className=""></div>;
}

function SalesCard({
  labelname = "Total Assert Value",
  stats = "$10,200,323",
}: {
  labelname?: string;
  stats?: string;
}) {
  return (
    <div className="flex gap-4 justify-center items-center">
      <BiDollarCircle className=" text-blue-600" size={24} />
      <div className="flex flex-col gap-4 ">
        <Label isCapital>{labelname}</Label>

        <Stats>{stats}</Stats>
      </div>
    </div>
  );
}

const AvatarCard = ({
  image = "/Avatar.avif",
  name,
  label,
}: {
  image?: string;
  name: string;
  label: string;
}) => {
  return (
    <div className="flex gap-4 items-center justify-center h-full ">
      <Image
        src={image}
        alt="Avatar Logo"
        width={40}
        height={40}
        className=" rounded-full"
      />
      <div className="flex flex-col gap-1 leading-none">
        <h1 className=" line-clamp-1 tracking-tight">{name}</h1>
        <Label isCapital={false}>{label}</Label>
      </div>
    </div>
  );
};

export { CalendarEventCard, SalesCard, DoctorCard, AvatarCard };
