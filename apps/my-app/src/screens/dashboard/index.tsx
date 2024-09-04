import Hr from "@/ui/hr";
import Label from "@/ui/label";
import UserGreeting from "@/ui/salutation";
import Spacer from "@/ui/spacer";
import Stats from "@/ui/stats";
import {
  BiArrowToTop,
  BiSolidDownArrow,
  BiSolidUpArrow,
  BiUpArrow,
} from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function IncomeExpenseGraph() {
  return (
    <div className="w-full max-w-[360px] rounded-xl border-[1px] shadow-sm flex flex-col gap-6 px-6 py-4">
      <div className=" justify-between items-center  w-full flex  ">
        <h3 className=" font-bold text-base text-slate-900">
          Income & Expense
        </h3>
        <select className="border font-medium rounded-xl px-2 py-1 text-sm">
          <option>Last 6 months</option>
        </select>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex  gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1 items-center">
              <div className="h-1 w-3 rounded bg-green-500"></div>
              <Label isCapital> TOTAL INCOME</Label>
            </div>
            <div className="flex items-center gap-4">
              <Stats>$1,412</Stats>
              <div className="flex gap-1 rounded-full bg-green-100 items-center justify-center p-1">
                <BiSolidUpArrow size={12} className=" text-green-600" />

                <div className=" font-bold text-xs">4.51%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1 items-center">
              <div className="h-1 w-3 rounded bg-yellow-500"></div>
              <Label isCapital>TOTAL EXPENSES</Label>
            </div>

            <div className="flex items-center gap-4">
              <Stats>$612.34</Stats>
              <div className="flex gap-1  rounded-full bg-red-100 p-1 items-center justify-center">
                <BiSolidDownArrow size={12} className=" text-red-600" />

                <div className=" font-bold text-xs">2.41%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cashflow() {
  return (
    <div className="w-full max-w-[600px] rounded-xl border-[1px] shadow-sm flex flex-col gap-2 px-6 py-4">
      <div className=" justify-between items-center  w-full flex  ">
        <h3 className=" font-bold text-base text-slate-900">Cashflow</h3>
        <select className="border font-medium rounded-xl px-2 py-2 text-sm">
          <option>Last 12 month</option>
        </select>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <Label isCapital>Total Cash</Label>
          <div className="flex items-center gap-4">
            <Stats>$13,232</Stats>
            <div className="flex gap-2 rounded-full bg-green-100 items-center justify-center p-[0.3rem]">
              <div className="flex items-center bg-green-600 rounded-full justify-center p-2 ">
                <FaArrowUp size={10} className=" text-white " />
              </div>
              <div className=" font-bold text-xs">4.51%</div>
            </div>
          </div>
        </div>
        <div className=" font-medium text-sm ">
          January 2022 - December 2022
        </div>
      </div>
    </div>
  );
}

const SelectionOption = [
  {
    value: "month",
    label: "This month",
  },
  {
    value: "last-month",
    label: "Last month",
  },
  {
    value: "six-month",
    label: "Last 6 month",
  },
];

function ExpenseGraph() {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="flex justify-between ">
        <h2>Income & Expense</h2>
        <select defaultValue={"last-month"}>
          {SelectionOption.map((e) => (
            <option key={e.value} value={e.value}>
              {e.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function PatientsGraph() {
  const data = {
    newPatients: 100,
    returningPatients: 142,
  };

  const total = data.newPatients + data.returningPatients;

  return (
    <div className="w-full max-w-[460px] rounded-xl border-[1px] shadow-sm flex flex-col gap-4 px-6 py-4">
      <div className=" justify-between items-center  w-full flex  ">
        <h3 className=" font-Manrope font-bold text-base text-slate-900">
          Patients
        </h3>
        <select className="border font-medium rounded-xl px-2 py-2 text-sm">
          <option>Last 12 month</option>
        </select>
      </div>
      <div className="w-full flex-col gap-2">
        <div className="w-full flex justify-between items-center ">
          <div
            className=" text-lg font-bold border-l-2 px-2 flex flex-col gap-2 "
            style={{
              width: ((data.newPatients / total) * 100).toString() + "%",
            }}
          >
            <div>{data.newPatients}</div>
            <div className="flex flex-col justify-around">
              <div className=" text-xs text-slate-700 font-light">
                {((data.newPatients / total) * 100).toFixed(2).toString() + "%"}
              </div>
              <div className="  text-neutral-400 text-[12px] -py-0 whitespace-nowrap">
                New patients
              </div>
            </div>
          </div>
          <div
            style={{
              width: ((data.returningPatients / total) * 100).toString() + "%",
            }}
            className=" text-lg font-bold border-l-2 px-2 flex flex-col gap-2 "
          >
            <div>{data.returningPatients}</div>
            <div className="flex flex-col justify-around">
              <div className=" text-xs text-slate-700 font-light">
                {((data.returningPatients / total) * 100)
                  .toFixed(2)
                  .toString() + "%"}
              </div>
              <div className=" text-neutral-400 text-[12px] -py-0 whitespace-nowrap">
                Returning patients
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div
            className=" h-4 bg-blue-400"
            style={{
              width: ((data.newPatients / total) * 100).toString() + "%",
            }}
          />
          <div
            style={{
              width: ((data.returningPatients / total) * 100).toString() + "%",
            }}
            className="w-full h-4 flex gap-1"
          >
            {Array.from({
              length: Math.round((data.returningPatients / total) * 100),
            }).map((_, i) => (
              <div key={i} className="h-4 w-2 bg-neutral-500" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PopularGraph() {
  const data = [
    {
      name: "Scaling Teeth",
      rating: 4.7,
    },
    {
      name: "Tooth Extraction",
      rating: 4.4,
    },
    {
      name: "General Checkup",
      rating: 4.6,
    },
  ];
  return (
    <div className="w-full max-w-[460px] rounded-xl border-[1px] shadow-sm flex flex-col gap-6 px-6 py-4">
      <div className=" justify-between items-center  w-full flex  ">
        <h3 className=" font-Manrope font-bold text-base text-slate-900">
          Popular Treatments
        </h3>
      </div>
      <div className="w-full flex flex-col gap-4">
        {data.map((e) => {
          return (
            <div key={e.name} className="flex justify-between gap-2">
              <div className="flex gap-2 items-center">
                <div className=" h-4 w-1 rounded-lg bg-neutral-500"></div>
                <div>{e.name}</div>
              </div>
              <div className="flex gap-2 items-center rounded-lg bg-neutral-100 px-2 ">
                <BsStarFill size={14} className=" text-yellow-400" />
                <div>{e.rating}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StockGraph() {
  const data = [
    {
      name: "Available",
      color: "#13CACA",
      items: 23,
    },
    {
      name: "Low Stock",
      color: "#FCB900",
      items: 10,
    },
    {
      name: "Out of stock",
      color: "#FE3D75",
      items: 11,
    },
  ];

  const items = [
    {
      name: "Dental Brush",
      quantity: 3,
    },
    {
      name: "Charmflex Regular",
      quantity: 2,
    },
  ];

  const totalProducts = data.reduce((prev, curr) => {
    return prev + curr.items;
  }, 0);

  return (
    <div className="w-full max-w-[360px] rounded-xl border-[1px] shadow-sm flex flex-col gap-6 px-4 py-4">
      <div className=" justify-between items-center  w-full flex  ">
        <h3 className=" font-bold text-base text-slate-900">Stock avability</h3>
      </div>
      <div className="w-full flex gap-16 items-center">
        <div className="flex  gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1 items-center">
              <Label isCapital> TOTAL ASSET</Label>
            </div>
            <div className="flex items-center gap-4">
              <Stats>$53,000</Stats>
            </div>
          </div>
        </div>
        <div className="flex  gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1 items-center">
              <Label isCapital>TOTAL PRODUCT</Label>
            </div>

            <div className="flex items-center gap-4">
              <Stats>442</Stats>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-1">
        {data.map((e) => (
          <div
            key={e.name}
            className=" h-3 rounded-sm "
            style={{
              width: ((e.items / totalProducts) * 100).toString() + "%",
              background: e.color,
            }}
          />
        ))}
      </div>
      <div className="flex gap-2">
        {data.map((e) => (
          <div key={e.name} className="flex gap-2 items-center">
            <div
              key={e.name}
              className=" h-3 w-3 rounded-sm "
              style={{
                background: e.color,
              }}
            />
            <div className=" text-slate-900 font-light text-sm">{e.name}</div>
          </div>
        ))}
      </div>
      <Hr size="full" direction="horizontal" />
      <div className="flex flex-col gap-2">
        <div className="w-full flex justify-between">
          <Label isCapital>low stock</Label>
          <div className="text-blue-500 hover:text-blue-700">View all</div>
        </div>
        <div className="flex flex-col gap-2">
          {items.map((e) => (
            <div
              key={e.name}
              className="flex w-full justify-between bg-neutral-100 p-2 rounded text-sm"
            >
              <div>{e.name}</div>
              <div className="flex gap-1">
                <div>Qty:{e.quantity}</div>
                <Spacer />
                <Hr direction="vertical" size="fit" />
                <div className="text-blue-500 hover:text-blue-700">Order</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardContainer() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <UserGreeting />
      <div className="flex gap-4 flex-wrap">
        <Cashflow />
        <ExpenseGraph />
        <div className="flex flex-col gap-4">
          <PatientsGraph />
          <PopularGraph />
        </div>
        <StockGraph />
        <IncomeExpenseGraph />
      </div>
    </div>
  );
}

export default DashboardContainer;
