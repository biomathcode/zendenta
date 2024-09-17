"use client";
import CreatePatientsForm from "@/form/createPatients";

import { CreateDialog } from "@/ui/createdialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { TableContainer } from "@/ui/table.type";
import { useQuery } from "convex/react";
import { BiDollarCircle } from "react-icons/bi";
import { api } from "../../../convex/_generated/api";
import { Button } from "@/ui/button";
import Search from "@/ui/search";

function PatientsContainer() {
  const patients = useQuery(api.patients.get);
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
          {patients && (
            <TableContainer
              header={
                <div className="flex w-full justify-between">
                  <Search />
                  <CreateDialog
                    title="Add Patients"
                    desc="Fill the form to add patient"
                    form={<CreatePatientsForm />}
                  >
                    <Button>Add Patient</Button>
                  </CreateDialog>
                </div>
              }
              data={patients}
              dataType={"Patient"}
            />
          )}
        </TabsContent>
        <TabsContent value="inactive">
          <div className="w-full h-full flex justify-center items-center">
            <div>No data found</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default PatientsContainer;
