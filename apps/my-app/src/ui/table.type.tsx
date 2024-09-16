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

// Define the types for the data formats
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

type Patient = {
  _id: string;
  _creationTime: number;
  name: string;
  email: string;
  address: string;
  image: string;
  phone: string;
  registered: string;
  lastVisited: string;
};

type Stock = {
  name: string;
  categories: "Antiseptic" | "Antibiotic" | "Steroid";
  sku: string;
  vendor: string;
  stock: number;
  status: "IN STOCK" | "LOW STOCK" | "OUT OF STOCK";
  assertValue: number; // in dollars
  clinicId: string;
};

type Peripherals = {
  productname: string;
  productimage: string;
  assignedTo: string; // vendor
  tags: string[];
  series: string;
  category: string;
  weigth: number;
  sku: string;
  barcode: string;
  description: string;
  purchaseDate: string;
  purchasePrice: number;
  vendor: string;
  invoiceNumber: number;
  status: "Draft" | "Used" | "Not Used";
};

// Enum to define the data type
type DataType = "Patient" | "Staff" | "Stock" | "Peripherals";

const columnHelperPerson = createColumnHelper<Person>();
const columnHelperPatient = createColumnHelper<Patient>();

const columnHelperStock = createColumnHelper<Stock>();
const columnHelperPeripherals = createColumnHelper<Peripherals>();

// Columns for Staff (Person)
const personColumns = [
  columnHelperPerson.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPerson.accessor("contact", {
    header: () => "Contact",
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelperPerson.accessor("email", {
    header: () => "Email",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPerson.accessor("working_days", {
    header: () => "Working Days",
    cell: (info) => info.getValue().join(", "), // Convert numbers to a comma-separated string
    footer: (info) => info.column.id,
  }),
  columnHelperPerson.accessor("assigned_treatment", {
    header: "Assigned Treatment",
    cell: (info) => info.getValue().join(", "),
    footer: (info) => info.column.id,
  }),
  columnHelperPerson.accessor("assigned_cosmetic", {
    header: "Assigned Cosmetic",
    cell: (info) => info.getValue().join(", "),
    footer: (info) => info.column.id,
  }),
  columnHelperPerson.accessor("type", {
    header: "Type",
    footer: (info) => info.column.id,
  }),
  columnHelperPerson.accessor("occupation", {
    header: "Occupation",
    footer: (info) => info.column.id,
  }),
];

// Columns for Patient
const patientColumns = [
  columnHelperPatient.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPatient.accessor("email", {
    header: () => "Email",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPatient.accessor("address", {
    header: () => "Address",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPatient.accessor("phone", {
    header: () => "Phone",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPatient.accessor("registered", {
    header: () => "Registered Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPatient.accessor("lastVisited", {
    header: () => "Last Visited",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

// Columns for Stock
const stockColumns = [
  columnHelperStock.accessor("name", {
    header: () => "Product Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperStock.accessor("categories", {
    header: () => "Categories",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperStock.accessor("sku", {
    header: () => "SKU",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperStock.accessor("vendor", {
    header: () => "Vendor",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperStock.accessor("stock", {
    header: () => "Stock",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperStock.accessor("status", {
    header: () => "Status",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperStock.accessor("assertValue", {
    header: () => "Asset Value",
    cell: (info) => `$${info.getValue()}`,
    footer: (info) => info.column.id,
  }),
];

// Columns for Peripherals
const peripheralsColumns = [
  columnHelperPeripherals.accessor("productname", {
    header: () => "Product Name",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPeripherals.accessor("category", {
    header: () => "Category",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPeripherals.accessor("sku", {
    header: () => "SKU",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPeripherals.accessor("vendor", {
    header: () => "Vendor",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPeripherals.accessor("purchaseDate", {
    header: () => "Purchase Date",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelperPeripherals.accessor("purchasePrice", {
    header: () => "Purchase Price",
    cell: (info) => `$${info.getValue()}`,
    footer: (info) => info.column.id,
  }),
  columnHelperPeripherals.accessor("status", {
    header: () => "Status",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

function TableContainer({
  data,
  dataType,
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
  data: Person[] | Patient[] | Stock[] | Peripherals[];
  dataType: DataType;
  header?: ReactNode;
}) {
  // Determine columns based on dataType
  const columns =
    dataType === "Staff"
      ? personColumns
      : dataType === "Patient"
        ? patientColumns
        : dataType === "Stock"
          ? stockColumns
          : peripheralsColumns;

  // Cast data based on dataType
  const tableData =
    dataType === "Staff"
      ? (data as Person[])
      : dataType === "Patient"
        ? (data as Patient[])
        : dataType === "Stock"
          ? (data as unknown as Stock[])
          : (data as unknown as Peripherals[]);

  const table = useReactTable({
    data: tableData as any,
    columns: columns as any,
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
