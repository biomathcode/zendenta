import Header from "@/ui/header";

import ClinicReservation from "@/screens/clinic/clinic.reservation";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

function Design() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Header type="Reservations" />
      <article className=" font-Manrope mx-auto max-w-screen-xl px-4  md:flex md:flex-row  w-full h-[calc(100vh-60px)] ">
        <ClinicReservation />
      </article>
    </div>
  );
}

export default Design;
