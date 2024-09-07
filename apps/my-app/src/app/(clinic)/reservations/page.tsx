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
import DashboardContainer from "@/screens/dashboard";
import ClinicReservation from "@/screens/clinic/clinic.reservation";

function Design() {
  return (
    <div className="flex justify-center items-center min-w-full  ">
      <main className="flex w-full h-full">
        <NavProvider>
          <NavGroup />
        </NavProvider>

        <div className="h-full w-full flex flex-col ">
          <Header />
          <article className=" font-Manrope mx-auto max-w-screen-xl px-4  md:flex md:flex-row  w-full h-[calc(100vh-60px)] ">
            <ClinicReservation />
          </article>
        </div>
      </main>
    </div>
  );
}

function Tokens() {
  const listColors = Object.values(colors);
  return (
    <div className="flex flex-col gap-4 mb-40">
      <div className=" flex gap-10 max-w-lg flex-wrap">
        {listColors.map((e) => {
          return <Box key={e} color={e} />;
        })}
      </div>
      <Button label="Save" />
      <div className="flex gap-4">
        <Chip type="default">Hello</Chip>
        <Chip type="info">Hello</Chip>
        <Chip type="success">Hello</Chip>
        <Chip type="error">Hello</Chip>
      </div>
      <WorkingDays />
      <TypographyDemo />
    </div>
  );
}

export default Design;
