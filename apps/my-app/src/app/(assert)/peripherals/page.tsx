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
import PeripheralsContainer from "@/screens/assert/assert.peripherals";
import RootLayout from "@/app/dashboard/layout";

function Peripheral() {
  return <PeripheralsContainer />;
}

export default Peripheral;
