import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Search from "@/ui/search";
import Spacer from "@/ui/spacer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";

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
        </TabsContent>
        <TabsContent value="Payment">
          <div className="w-full h-full flex justify-center items-center">
            <div>No data found</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default SalesContainer;
