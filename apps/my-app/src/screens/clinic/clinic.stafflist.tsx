import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Label from "@/ui/label";
import Spacer from "@/ui/spacer";
import Stats from "@/ui/stats";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { BiDollarCircle } from "react-icons/bi";

function StaffListContainer() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <Spacer direction="vertical" size="large" />

      <Tabs
        defaultValue="Doctor"
        className="relative w-full h-full bg-neutral-200"
      >
        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="Doctor">
            Doctor Staff
          </TabsTrigger>
          <TabsTrigger value="General">General Staff</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full "
          value="Doctor"
        >
          TODO: Add Table with filter and Search
        </TabsContent>
        <TabsContent value="General">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default StaffListContainer;
