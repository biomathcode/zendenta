import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Search from "@/ui/search";
import Spacer from "@/ui/spacer";
import { TableContainer } from "@/ui/table.type";
import { useQuery } from "convex/react";
import Link from "next/link";
import { BiFilter, BiPlus } from "react-icons/bi";
import { api } from "../../../convex/_generated/api";

function PeripheralsContainer() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <Spacer direction="horizontal" size="large" />

      <div className="flex gap-4 min-h-fit">
        <SalesCard />
        <Spacer direction="horizontal" size="large" />

        <Hr direction="vertical" size="sm" />
        <Spacer direction="horizontal" size="large" />
        <LinearGraph />
      </div>
      <Hr direction="horizontal" size="full" />

      <TableContainer
        dataType="Peripherals"
        data={[]}
        header={
          <div className="flex w-full justify-between">
            <Search />
            <div className="flex gap-4">
              <button className="flex gap-2  items-center px-4 border border-neutral-100 rounded">
                <BiFilter size={16} />
                Filter
              </button>
              {/*TODO: Add Dialgo here */}
              <Link href={"/peripherals/add"}>
                <button className="flex gap-2  items-center bg-indigo-500 px-2 py-2 rounded text-sm text-neutral-50">
                  <BiPlus size={16} />
                  Add Peripherals
                </button>
              </Link>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default PeripheralsContainer;
