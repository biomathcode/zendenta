import Header from "@/ui/header";

import PatientsContainer from "@/screens/clinic/clinic.patients";
import { Suspense } from "react";
import Loading from "./loading";

function Design() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Header type="Patients" />
      <article className=" font-Manrope mx-auto max-w-screen-xl px-4  md:flex md:flex-row  w-full h-[calc(100vh-60px)] ">
        <Suspense fallback={<Loading />}>
          <PatientsContainer />
        </Suspense>
      </article>
    </div>
  );
}

export default Design;
