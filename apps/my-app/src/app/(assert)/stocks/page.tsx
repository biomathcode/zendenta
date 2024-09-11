import Box from "@/ui/box";
import Button from "@/ui/button";
import Chip from "@/ui/chip";
import { colors } from "@/ui/colors";
import Header from "@/ui/header";

import { TypographyDemo } from "@/ui/typography";
import { WorkingDays } from "@/ui/table.type";

import NavGroup from "@/ui/navgroup";
import { NavProvider } from "@/hooks/useNavOpen";
import ClinicReservation from "@/screens/clinic/clinic.reservation";
import StockContainer from "@/screens/assert/assert.stocks";

function Page() {
  return <StockContainer />;
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

export default Page;
