import Header from "@/ui/header";

import DashboardContainer from "@/screens/dashboard";
import RootLayout from "../dashboard/layout";

function Design() {
  return (
    <RootLayout>
      <div className="h-full w-full flex flex-col ">
        <Header type="Support" />
        <article className=" font-Manrope mx-auto max-w-screen-xl px-4 py-8 md:flex md:flex-row md:py-10 w-full h-[calc(100vh-60px)] ">
          <DashboardContainer />
        </article>
      </div>
    </RootLayout>
  );
}

export default Design;
