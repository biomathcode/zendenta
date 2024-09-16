"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactNode } from "react";
import Search from "./search";
import { PiPlusCircle } from "react-icons/pi";
import { Dialog } from "./dialog";
import { CreateDialog } from "./createdialog";
import CreateStockForm from "@/form/createClinic";

// Define the type for the new data format
type Person = {
  _id: string;
  name: string;
  contact: string;
  email: string;
  assigned_treatment: string[];
  assigned_cosmetic: string[];
  occupation: string;
  type: "PART-TIME" | "FULL-TIME";
  working_days: number[]; // Representing days as numbers (1 = Monday, etc.)
};

const columnHelper = createColumnHelper<Person>();

// Update columns to match the new fields
const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("contact", {
    header: () => "Contact",
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("working_days", {
    header: () => "Working Days",
    cell: (info) => info.getValue().join(", "), // Convert numbers to a comma-separated string
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("assigned_treatment", {
    header: "Assigned Treatment",
    cell: (info) => info.getValue().join(", "),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("assigned_cosmetic", {
    header: "Assigned Cosmetic",
    cell: (info) => info.getValue().join(", "),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("type", {
    header: "Type",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("occupation", {
    header: "Occupation",
    footer: (info) => info.column.id,
  }),
];

function TableContainer({
  data,
  header = (
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
  ),
}: {
  data: Person[];
  header?: ReactNode;
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col gap-1">
      {header}
      <table className="border-neutral-200 w-full text-left rounded-lg">
        <thead className="bg-neutral-100 rounded-lg">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="rounded-lg overflow-hidden">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="uppercase border-none px-3.5 py-4 font-semibold text-neutral-400 text-sm"
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
                className={`${i % 2 === 0 ? "bg-white" : "bg-white"}`}
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
              <td colSpan={12}>No Record Found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export { TableContainer };
