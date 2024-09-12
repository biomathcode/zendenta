"use client";
import Box from "@/ui/box";
import Button from "@/ui/button";
import Chip from "@/ui/chip";
import { colors } from "@/ui/colors";
import Header from "@/ui/header";

import { TypographyDemo } from "@/ui/typography";
import { WorkingDays } from "@/ui/table.type";

import NavGroup from "@/ui/navgroup";
import { NavProvider } from "@/hooks/useNavOpen";
import StockContainer from "@/screens/assert/assert.stocks";
import { CalendarEventCard } from "@/ui/card";
import RootLayout from "../dashboard/layout";

function Design() {
  return (
    <RootLayout>
      <div className="flex justify-center items-center min-w-full  ">
        <main className="flex w-full h-full">
          <NavProvider>
            <NavGroup />
          </NavProvider>

          <div className="h-full w-full flex flex-col ">
            <Header type="Dashboard" />
            <article className=" mx-auto max-w-screen-xl px-4 py-4 md:flex md:flex-row md:py-4 w-full h-[calc(100vh-60px)] ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input type="file" accept=".png" />
                <button type="submit">Upload File</button>
              </form>
              <div className=" max-w-lg">
                <CalendarEventCard />
              </div>

              {/* <StockContainer /> */}
            </article>
          </div>
        </main>
      </div>
    </RootLayout>
  );
}

export default Design;
