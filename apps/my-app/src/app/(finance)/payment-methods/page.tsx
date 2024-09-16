import Header from "@/ui/header";

import SalesContainer from "@/screens/finance/finance.sales";

function Sales() {
  return (
    <div className="h-full w-full flex flex-col ">
      <Header type="Payment Methods" />
      <article className=" font-Manrope mx-auto max-w-screen-xl px-4  md:flex md:flex-row  w-full h-[calc(100vh-60px)] ">
        <SalesContainer />
      </article>
    </div>
  );
}

export default Sales;
