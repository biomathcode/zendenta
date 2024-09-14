import Box from "@/ui/box";
import Button from "@/ui/button";
import Chip from "@/ui/chip";
import { colors } from "@/ui/colors";
import Header from "@/ui/header";

import { TypographyDemo } from "@/ui/typography";
import { WorkingDays } from "@/ui/table.type";

import NavGroup from "@/ui/navgroup";
import { NavProvider } from "@/hooks/useNavOpen";
import DashboardContainer from "@/screens/dashboard";

function Design() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Header type="Dashboard" />
      <article className=" font-Manrope mx-auto max-w-screen-xl px-4 py-8 md:flex md:flex-row md:py-10 w-full h-[calc(100vh-60px)] overflow-scroll ">
        <DashboardContainer />
      </article>
    </div>
  );
}

export default Design;
