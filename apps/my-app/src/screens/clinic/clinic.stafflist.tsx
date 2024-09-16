"use client";
import CreateDoctorForm from "@/form/createDoctor";
import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import { CreateDialog } from "@/ui/createdialog";
import Hr from "@/ui/hr";
import { Stethoscope } from "@/ui/icons";
import Label from "@/ui/label";
import Search from "@/ui/search";
import Spacer from "@/ui/spacer";
import Stats from "@/ui/stats";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { TableContainer } from "@/ui/table.type";
import { useQuery } from "convex/react";
import { BiDollarCircle } from "react-icons/bi";
import { api } from "../../../convex/_generated/api";

function StaffListContainer() {
  const staff = useQuery(api.staff.get);

  console.log(staff);
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <Tabs defaultValue="Doctor" className="relative w-full h-full">
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
          {staff && (
            <TableContainer
              dataType="Staff"
              data={staff}
              header={
                <div className="flex gap-2 w-full justify-between">
                  <div className="flex gap-2 items-center">
                    <Stethoscope />
                    <div className="flex gap-1">{staff.length} Doctor</div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <button className="border px-4 py-2 rounded">
                      Filters
                    </button>

                    <CreateDialog
                      title="Add new Doctor Staff"
                      desc=""
                      form={<CreateDoctorForm />}
                    >
                      <button className="flex gap-2 items-center px-4 py-2 bg-indigo-500 rounded text-white">
                        Add Doctor
                      </button>
                    </CreateDialog>
                  </div>
                </div>
              }
            />
          )}
        </TabsContent>
        <TabsContent value="General">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default StaffListContainer;
