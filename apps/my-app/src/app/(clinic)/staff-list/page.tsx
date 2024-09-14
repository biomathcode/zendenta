import Header from "@/ui/header";

import StaffListContainer from "@/screens/clinic/clinic.stafflist";

function Design() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Header type="StaffList" />
      <article className=" font-Manrope mx-auto max-w-screen-xl px-4  md:flex md:flex-row  w-full h-[calc(100vh-60px)] ">
        <StaffListContainer />
      </article>
    </div>
  );
}

export default Design;
