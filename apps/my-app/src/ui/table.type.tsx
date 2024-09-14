// working days
//
"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState, useEffect, useReducer } from "react";
import Search from "./search";
import { PiPlusCircle } from "react-icons/pi";
import { Dialog } from "./dialog";
import { CreateDialog } from "./createdialog";
import CreateStockForm from "@/form/createStock";

type Person = {
  name: string;
  contact: string;
  workingDays: string[];
  assignedTreatment: string;
  type: "PART-TIME" | "FULL-TIME";
};

const defaultData: Person[] = [
  {
    name: "tanner",
    contact: "993423",
    workingDays: ["M", "T", "W", "Th", "F"],
    assignedTreatment: "Dental Service",
    type: "FULL-TIME",
  },
  {
    name: "tanner",
    contact: "993423",
    workingDays: ["M", "T", "W", "Th", "F"],
    assignedTreatment: "Dental Service",
    type: "PART-TIME",
  },
  {
    name: "joe",
    contact: "2342323",
    workingDays: ["M", "T", "W", "F"],
    assignedTreatment: "Dental Service, Oral Disease, ",
    type: "FULL-TIME",
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.contact, {
    id: "contact",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Contact</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("workingDays", {
    header: () => "Working Days",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("assignedTreatment", {
    header: "Assigned Treatment",
    footer: (info) => info.column.id,
  }),

  columnHelper.accessor("type", {
    header: "Type ",
    footer: (info) => info.column.id,
  }),
];

function TableContainer() {
  const [data, _setData] = useState(() => [...defaultData]);
  const rerender = useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className=" flex flex-col gap-1">
      <div className="flex gap-2 w-full justify-between">
        <Search />
        <div className="flex gap-4 items-center">
          <button className="border p-2 rounded">Filters</button>
          <button className="border p-2 rounded text-blue-500">
            Order Stock
          </button>
          <CreateDialog title="" desc="" form={<CreateStockForm />}>
            <button className="flex gap-2 items-center p-2 bg-blue-500 rounded text-white">
              <PiPlusCircle /> New Products
            </button>
          </CreateDialog>
        </div>
      </div>

      <table className=" border-neutral-200 w-full text-left rounded-lg">
        <thead className="bg-neutral-100 rounded-lg">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className=" rounded-lg overflow-hidden">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className=" uppercase border-none  px-3.5 py-4 font-semibold text-neutral-400 text-sm"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="rounded-lg">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`
                ${i % 2 === 0 ? "bg-white" : "bg-white"}
                `}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={12}>No Recoard Found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function WorkingDays() {
  const days = ["s", "m", "t", "w", "t", "f", "s"];

  const capDays = days.map((e) => e.toUpperCase());

  return (
    <div className="flex gap-2">
      {capDays.map((e) => (
        <div
          key={e}
          className="rounded-full text-white text-xs  bg-blue-500 w-8 h-8  flex justify-center items-center"
        >
          {e}
        </div>
      ))}
    </div>
  );
}

export { WorkingDays, TableContainer };
