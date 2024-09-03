import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Label from "@/ui/label";
import Spacer from "@/ui/spacer";
import Stats from "@/ui/stats";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { BiDollarCircle } from "react-icons/bi";

function TreatmentsContainer() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <Spacer direction="vertical" size="large" />

      <Tabs
        defaultValue="active"
        className="relative w-full h-full bg-neutral-200"
      >
        <div className="absolute w-full top-40 left-8 bg-slate-800  h-4"></div>

        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="active">
            Active Treatment
          </TabsTrigger>
          <TabsTrigger value="inactive">Inactive Treatment</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full before:border-t before:top-0 "
          value="active"
        >
          TODO: Add Table with filter and Search
        </TabsContent>
        <TabsContent value="inactive">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default TreatmentsContainer;
