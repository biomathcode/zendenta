import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Spacer from "@/ui/spacer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { TableContainer } from "@/ui/table.type";

function StockContainer() {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="flex gap-4 min-h-fit">
        <SalesCard />
        <Spacer direction="horizontal" size="large" />

        <Hr direction="vertical" size="sm" />
        <Spacer direction="horizontal" size="large" />
        <LinearGraph />
      </div>
      <Spacer direction="vertical" size="large" />

      <Tabs defaultValue="Inventory" className="relative w-full h-full">
        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="Inventory">
            Inventory
          </TabsTrigger>
          <TabsTrigger value="Order Stock">Order Stock</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full  "
          value="Inventory"
        >
          <TableContainer />
        </TabsContent>
        <TabsContent value="Order Stock">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default StockContainer;
