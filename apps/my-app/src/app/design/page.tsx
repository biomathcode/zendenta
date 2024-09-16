"use client";
import Header from "@/ui/header";

import { CalendarEventCard } from "@/ui/card";
import { MultiStep } from "@/ui/multistepper";

function Design() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Header type="Dashboard" />
      <article className=" mx-auto max-w-screen-xl px-4 py-4 md:flex md:flex-row md:py-4 w-full h-[calc(100vh-60px)] ">
        <div className=" max-w-lg">
          <CalendarEventCard />
        </div>
        <button
          onClick={async () => {
            await fetch("/api/emails", {
              method: "POST",
            });
          }}
        >
          Send Email
        </button>
        <MultiStep />

        {/* <StockContainer /> */}
      </article>
    </div>
  );
}

export default Design;
