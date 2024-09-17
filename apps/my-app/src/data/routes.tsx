import { Peripheral, Stethoscope } from "@/ui/icons";
import {
  BsCreditCard,
  BsFillFileBarGraphFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaCalendar, FaMoneyCheck, FaReceipt } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { MdPerson2 } from "react-icons/md";

//TODO:Feature finance has been disabled
export const routes = [
  {
    groupname: "clinic",
    children: [
      {
        name: "Reservation",
        href: "reservations",
        icon: <FaCalendar />,
      },
      {
        name: "Patients",
        href: "patients",
        icon: <MdPerson2 />,
      },
      {
        name: "Treatments",
        href: "treatments",
        icon: <Stethoscope />,
      },
      {
        name: "Staff List",
        href: "staff-list",
        icon: <BsPeopleFill />,
      },
    ],
  },
  {
    groupname: "finance",
    children: [
      {
        name: "Accounts",
        href: "accounts",
        icon: <FaMoneyCheck />,
      },
      {
        name: "Sales",
        href: "sales",

        icon: <BsFillFileBarGraphFill />,
      },
      {
        name: "Purchase",
        href: "purchase",
        icon: <FaReceipt />,
      },
      {
        name: "Payment Methods",
        href: "payment-methods",

        icon: <BsCreditCard />,
      },
    ],
  },
  {
    groupname: "PHYSICAL ASSERT",
    children: [
      {
        name: "Stocks",
        href: "stocks",
        icon: <FaBottleWater />,
      },
      {
        name: "Peripherals",
        href: "peripherals",

        icon: <Peripheral />,
      },
    ],
  },
];
