"use client";
import { AvatarCard, CalendarEventCard } from "@/ui/card";
import MyDialog from "@/ui/drawer";
import Hr from "@/ui/hr";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tab";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight, FaCalendarCheck } from "react-icons/fa";
import { MdFilterList, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Drawer } from "vaul";

//TODO add TimeTicker
//TODO: add

function DoctorView() {
  return (
    <div className=" flex flex-col w-[400px] min-w-[400px] ">
      <div className=" h-24 flex justify-around items-center border-t border-r border-b ">
        <AvatarCard
          name="Dr. Soap Mactavish"
          label="Today appointments 4 patient(s)"
        />
        <button>
          <BiDotsHorizontal size={20} className="text-neutral-500" />
        </button>
      </div>
      <div className="relative ">
        <div className=" absolute top-4">
          <MyDialog
            isNested={false}
            content={
              <div className=" bg-white relative rounded-3xl flex-1 max-h-[94%]">
                <Drawer.Title className=" py-4 px-8 font-medium text-lg mx-auto ">
                  Medical Checkup
                </Drawer.Title>
                <Drawer.Close
                  aria-label="Close"
                  asChild
                  className=" absolute right-6 top-4"
                >
                  <button className=" bg-neutral-200 rounded-full p-1 ">
                    <MdOutlineKeyboardArrowRight
                      className=" text-neutral-500"
                      size={20}
                    />
                  </button>
                </Drawer.Close>
                <Hr
                  className=" min-w-full"
                  direction="horizontal"
                  size="full"
                />

                <div className="max-w-md mx-auto p-3">
                  <p className="text-zinc-600 mb-2">
                    This component can be used as a replacement for a Dialog on
                    mobile and tablet devices.
                  </p>
                  <div>
                    <MyDialog isNested={true}>
                      <button>Open Second Dialog</button>
                    </MyDialog>
                  </div>
                </div>
              </div>
            }
          >
            <button>
              <CalendarEventCard />
            </button>
          </MyDialog>
        </div>

        {[
          "9am",
          "10am",
          "11am",
          "12am",
          "1pm",
          "2pm",
          "3pm",
          "4pm",
          "5pm",
          "6pm",
          "7pm",
          "8pm",
          "9pm",
          "10pm",
          "11pm",
          "12pm",
          "1am",
          "2am",
          "3am",
          "4am",
          "5am",
          "6am",
          "7am",
          "8am",
        ].map((e) => (
          <div key={e} className="h-32 w-full border-b border-r"></div>
        ))}
      </div>
    </div>
  );
}

function DayView() {
  const slots = [
    "GMT +07:00",
    "9am",
    "10am",
    "11am",
    "12am",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
    "12pm",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
  ];
  return (
    <div className="sticky left-0 top-0 bg-white z-auto ">
      {slots.map((e) => (
        <div
          key={e}
          className={` border-r border-t flex justify-center text-sm pt-4 ${
            e.includes("GMT") ? " w-20 h-24" : " h-32 w-20 "
          } `}
        >
          {e}
        </div>
      ))}
    </div>
  );
}

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
          className=" relative overflow-scroll "
          style={{
            maxHeight: "calc(100vh - 100px)",
            maxWidth: "calc(100vw - 240px)",
          }}
          value="Calendar"
        >
          <div className="flex justify-between py-4 ">
            <div className="flex gap-2 items-center ">
              <div className=" p-2 bg-neutral-100 rounded">
                <FaCalendarCheck className=" text-neutral-500  " size={18} />
              </div>
              <div className=" text-2xl font-semibold ">16</div>

              <div className=" text-neutral-400">total appointments</div>
            </div>
            <div className="flex gap-2 items-center">
              <button className=" px-2 border rounded text-sm py-1 px-2 ">
                Today
              </button>
              <div className="flex gap-1">
                <div className="flex gap-2 items-center text-neutral-400">
                  <FaAngleLeft size={20} />
                  <FaAngleRight size={20} />
                  <div className=" text-neutral-700 font-medium text-lg">
                    Fri, 16 May 2022
                  </div>
                  <Hr direction="vertical" size="full" />
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-2 ">
              <select className=" border rounded px-4 text-sm">
                <option>All Dentist</option>
              </select>
              <button className="flex gap-2 items-center border rounded px-4">
                <div className="relative">
                  <div className="absolute border border-white w-2 h-2 bg-blue-300 rounded-full right-0"></div>
                  <MdFilterList />
                </div>
                Filters
              </button>
            </div>
          </div>
          <div className=" max-w-[calc(100vw - 260px)] max-h-full overflow-hidden">
            <div className="relative flex max-w-full  w-full h-full  overflow-scroll snap-x snap-proximity">
              <DayView />
              <DoctorView />
              <DoctorView />
              <DoctorView />

              <DoctorView />
              <DoctorView />
            </div>
          </div>
          {/* <WeekView defaultValue={today(getLocalTimeZone())} /> */}
        </TabsContent>
        <TabsContent value="Log History">Log History</TabsContent>
      </Tabs>
    </div>
  );
}

export default ClinicReservation;
