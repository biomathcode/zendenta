import { Peripheral, Stethoscope } from "@/ui/icons";
import {
  BsCreditCard,
  BsFillFileBarGraphFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaCalendar, FaMoneyCheck, FaReceipt } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { MdPerson2 } from "react-icons/md";

export const routes = [
  {
    groupname: "clinic",
    children: [
      {
        name: "Reservation",
        icon: <FaCalendar />,
      },
      {
        name: "Patients",
        icon: <MdPerson2 />,
      },
      {
        name: "Treatments",
        icon: <Stethoscope />,
      },
      {
        name: "Staff List",
        icon: <BsPeopleFill />,
      },
    ],
  },
  {
    groupname: "finance",
    children: [
      {
        name: "Accounts",
        icon: <FaMoneyCheck />,
      },
      {
        name: "Sales",
        icon: <BsFillFileBarGraphFill />,
      },
      {
        name: "Purchase",
        icon: <FaReceipt />,
      },
      {
        name: "Payment Methods",
        icon: <BsCreditCard />,
      },
    ],
  },
  {
    groupname: "PHYSICAL ASSERT",
    children: [
      {
        name: "Stocks",
        icon: <FaBottleWater />,
      },
      {
        name: "Peripherals",
        icon: <Peripheral />,
      },
    ],
  },
];
