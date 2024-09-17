"use client";
import { AvatarCard, CalendarEventCard } from "@/ui/card";
import MyDialog from "@/ui/drawer";
import Hr from "@/ui/hr";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tab";
import { useQuery } from "convex/react";
import { format } from "date-fns";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight, FaCalendarCheck } from "react-icons/fa";
import { MdFilterList, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Drawer } from "vaul";
import { api } from "../../../convex/_generated/api";
import { MultiStep } from "@/ui/multistepper";

//TODO add TimeTicker
//TODO: add

function DoctorView({
  name,
  label = "Today appointments 4 patient(s)",
  image,
}: {
  name: string;
  label: string;
  image: string;
}) {
  const currentDate = new Date();

  const formattedDate = format(currentDate, "EEEE, MMMM d, yyyy");

  return (
    <div className=" flex flex-col w-[400px] min-w-[400px] ">
      <div className=" h-24 flex justify-around items-center border-t border-r border-b ">
        <AvatarCard name={name} label={label} image={image} />
        <button>
          <BiDotsHorizontal size={20} className="text-neutral-500" />
        </button>
      </div>
      <div className="relative flex flex-col ">
        {name === "Pratik Sharma" && (
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
                      This component can be used as a replacement for a Dialog
                      on mobile and tablet devices.
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
        )}

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
          <MyDialog
            key={e}
            isNested={false}
            content={
              <div className=" bg-white relative rounded-3xl flex-1 max-h-[94%]">
                <Drawer.Title className=" py-4 px-8 font-medium text-lg mx-auto ">
                  Add Patient to waitlist
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

                <div className="max-w-md mx-auto p-1 my-4">
                  <MultiStep />
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                    className="flex flex-col gap-4"
                  >
                    <fieldset>
                      <label>
                        Treatment
                        <select name="treatment">
                          <option>Tooth Scaling</option>
                          <option>Tooth Whiting</option>
                        </select>
                      </label>
                    </fieldset>
                    <fieldset>
                      <label className="flex flex-col ">
                        <span>date and time</span>
                        <div className="flex gap-3">
                          <p className="text-gray-500">{formattedDate}</p>
                          <div>{e}</div>
                          to
                          <div>3:00pm</div>
                        </div>
                      </label>
                    </fieldset>
                    <fieldset>
                      <label className="flex flex-col">
                        <span>Quick Note</span>
                        <textarea />
                      </label>
                    </fieldset>
                    <fieldset>
                      <label className="flex flex-col">
                        <span>Attach Files</span>
                        <input type="file" />
                      </label>
                    </fieldset>
                    <div className="flex  w-full justify-between">
                      <button>cancel</button>
                      <button type="submit">Submit</button>
                    </div>
                  </form>

                  <div></div>
                </div>
              </div>
            }
          >
            <button className=" h-32 w-full border-b border-r hover:bg-neutral-200"></button>
          </MyDialog>
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
  const currentDate = new Date();

  // Determine the salutation based on the current time
  const currentHour = currentDate.getHours();
  const formattedDate = format(currentDate, "EEE,d MMM  yyyy");

  const staff = useQuery(api.staff.get);

  console.log("staff", staff);
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
              {/* <button className=" px-2 border rounded text-sm py-1 px-2 ">
                Today
              </button> */}
              <div className="flex gap-1">
                <div className="flex gap-2 items-center text-neutral-400">
                  <FaAngleLeft size={20} />
                  <FaAngleRight size={20} />
                  <div className=" text-neutral-700 font-medium text-lg">
                    <p className="text-neutral-800">{formattedDate}</p>
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
              {staff?.map((e) => (
                <DoctorView
                  key={e._id}
                  name={e.name}
                  image={e.image || ""}
                  label={"has 4 appoointments"}
                />
              ))}
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
