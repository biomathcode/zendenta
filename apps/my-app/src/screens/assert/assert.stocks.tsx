"use client";
import LinearGraph from "@/graph/linear";
import { SalesCard } from "@/ui/card";
import Hr from "@/ui/hr";
import Spacer from "@/ui/spacer";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tab";
import { TableContainer } from "@/ui/table.type";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Search from "@/ui/search";
import { CreateDialog } from "@/ui/createdialog";
import { PiPlusCircle } from "react-icons/pi";
import CreateStockForm from "@/form/createStock";

function StockContainer() {
  const stocks = useQuery(api.stocks.getStocks);
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <div className="flex gap-4 min-h-fit">
        <SalesCard />
        <Spacer direction="horizontal" size="large" />

        <Hr direction="vertical" size="sm" />
        <Spacer direction="horizontal" size="large" />
        <LinearGraph />
      </div>
      <Spacer direction="vertical" size="large" />

      <Tabs defaultValue="Inventory" className="relative w-full h-full">
        <TabsList className=" flex justify-start w-full border-b">
          <TabsTrigger className="" value="Inventory">
            Inventory
          </TabsTrigger>
          <TabsTrigger value="Order Stock">Order Stock</TabsTrigger>
        </TabsList>
        <TabsContent
          className=" relative before:absolute before:w-full  "
          value="Inventory"
        >
          {stocks && (
            <TableContainer
              dataType="Stock"
              data={stocks as any}
              header={
                <div className="flex gap-2 w-full justify-between">
                  <Search />
                  <div className="flex gap-4 items-center">
                    <button className="border p-2 rounded">Filters</button>
                    <button className="border p-2 rounded text-blue-500">
                      Order Stock
                    </button>
                    <CreateDialog title="" desc="" form={<CreateStockForm />}>
                      <button className="flex gap-2 items-center p-2 bg-blue-500 rounded text-white">
                        <PiPlusCircle /> New Products
                      </button>
                    </CreateDialog>
                  </div>
                </div>
              }
            />
          )}
        </TabsContent>
        <TabsContent value="Order Stock">
          <div className="w-full h-full flex justify-center items-center">
            <div>No data found</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default StockContainer;
