import LinearGraph from "@/graph/linear";
import Button from "@/ui/button";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Search from "@/ui/search";
import Spacer from "@/ui/spacer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { TableContainer } from "@/ui/table.type";
import { FaFileExport } from "react-icons/fa";
import { PiExport, PiExportBold, PiExportFill } from "react-icons/pi";

function SalesContainer() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex gap-4 min-h-fit">
        <SalesCard />
        <Spacer direction="horizontal" size="large" />

        <Hr direction="vertical" size="sm" />
        <Spacer direction="horizontal" size="large" />
        <LinearGraph />
      </div>

      <Tabs defaultValue="Bill" className="relative w-full h-full ">
        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="Bill">
            Bill
          </TabsTrigger>
          <TabsTrigger value="Payment">Payment Received</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full flex flex-col w-full"
          value="Bill"
        >
          <div className=" w-full flex justify-between py-4">
            <Search />
            <div className="flex gap-4 items-center">
              <div>Calendar Picker</div>
              <button className="flex gap-2 items-center py-2 px-4 bg-[#405BE7] rounded-lg text-white">
                <span>
                  <PiExportBold />
                </span>
                Export
              </button>
            </div>
          </div>

          <TableContainer />
        </TabsContent>
        <TabsContent value="Payment">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default SalesContainer;
