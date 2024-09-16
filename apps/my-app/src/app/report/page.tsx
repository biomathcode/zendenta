import Header from "@/ui/header";

import DashboardContainer from "@/screens/dashboard";

function Design() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Header type="Report" />
      <article className=" font-Manrope mx-auto max-w-screen-xl px-4 py-8 md:flex md:flex-row md:py-10 w-full h-[calc(100vh-60px)] ">
        <DashboardContainer />
      </article>
    </div>
  );
}

export default Design;
