import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Label from "@/ui/label";
import Spacer from "@/ui/spacer";
import Stats from "@/ui/stats";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { BiDollarCircle } from "react-icons/bi";

function StockContainer() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <div className="flex gap-4 min-h-fit">
        <SalesCard />
        <Spacer direction="horizontal" size="large" />

        <Hr direction="vertical" size="sm" />
        <Spacer direction="horizontal" size="large" />
        <LinearGraph />
      </div>
      <Spacer direction="vertical" size="large" />

      <Tabs
        defaultValue="Order Stock"
        className="relative w-full h-full bg-neutral-200"
      >
        <div className="absolute w-full top-40 left-8 bg-slate-800  h-4"></div>

        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="Inventory">
            Inventory
          </TabsTrigger>
          <TabsTrigger value="Order Stock">Order Stock</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full before:border-t before:top-0 "
          value="Inventory"
        >
          This is the inventory
        </TabsContent>
        <TabsContent value="Order Stock">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default StockContainer;
