"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import MyDialog from "@/ui/dialog";
import { Drawer } from "vaul";
function marketing() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div>
      <h1>Marketing</h1>
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      <MyDialog
        isNested={false}
        content={
          <div className="p-4 bg-white rounded-3xl flex-1 max-h-[94%]">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Unstyled drawer for React.
              </Drawer.Title>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <div>
                <MyDialog isNested={true}>
                  <button>Open Second Dialog</button>
                </MyDialog>
              </div>
            </div>
          </div>
        }
      >
        <button>First Dialog</button>
      </MyDialog>
    </div>
  );
}

export default marketing;
