import { BiDollarCircle } from "react-icons/bi";
import Label from "@/ui/label";
import Stats from "@/ui/stats";

// props => color, icon, name, time, status => Registered, Encounter, Finished

function calendarEventCard() {
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

export { calendarEventCard, SalesCard };
