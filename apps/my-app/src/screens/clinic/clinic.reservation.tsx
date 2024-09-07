import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tab";

function ClinicReservation() {
  return (
    <div className="flex flex-col gap-5 w-full h-full">
      <Tabs defaultValue="Calendar" className="relative w-full h-full">
        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="Calendar">
            Calendar
          </TabsTrigger>
          <TabsTrigger value="Log History">Log History</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full "
          value="Calendar"
        >
          TODO: Add table here
        </TabsContent>
        <TabsContent value="Log History">Log History</TabsContent>
      </Tabs>
    </div>
  );
}

export default ClinicReservation;
