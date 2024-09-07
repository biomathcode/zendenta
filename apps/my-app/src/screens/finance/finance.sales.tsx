import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Spacer from "@/ui/spacer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";

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
      <Spacer direction="vertical" size="large" />

      <Tabs
        defaultValue="Bill"
        className="relative w-full h-full bg-neutral-200"
      >
        <div className="absolute w-full top-40 left-8 bg-slate-800  h-4"></div>

        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="Bill">
            Bill
          </TabsTrigger>
          <TabsTrigger value="Payment">Payment Received</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full"
          value="Bill"
        >
          TODO: Add table here
        </TabsContent>
        <TabsContent value="Payment">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default SalesContainer;
