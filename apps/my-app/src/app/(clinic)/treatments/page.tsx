import Header from "@/ui/header";

import TreatmentsContainer from "@/screens/clinic/clinic.treatments";

function Treatments() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Header type="Treatments" />
      <article className=" font-Manrope mx-auto max-w-screen-xl px-4  md:flex md:flex-row  w-full h-[calc(100vh-60px)] ">
        <TreatmentsContainer />
      </article>
    </div>
  );
}

export default Treatments;
