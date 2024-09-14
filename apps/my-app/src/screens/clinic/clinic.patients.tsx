import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import { CreateDialog } from "@/ui/createdialog";
import Hr from "@/ui/hr";
import Label from "@/ui/label";
import Spacer from "@/ui/spacer";
import Stats from "@/ui/stats";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { BiDollarCircle } from "react-icons/bi";

function PatientsContainer() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <Tabs defaultValue="active" className="relative w-full h-full ">
        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="active">
            Active Patients
          </TabsTrigger>
          <TabsTrigger value="inactive">Inactive Patients</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full "
          value="active"
        >
          Add Patient with dialog, that will open form , and patient will be
          displayed in the table TODO: Add Table with filter and Search
          <CreateDialog
            title="Add Patients"
            desc="Fill the form to add patient"
          >
            <button>Add Patient</button>
          </CreateDialog>
        </TabsContent>
        <TabsContent value="inactive">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default PatientsContainer;
