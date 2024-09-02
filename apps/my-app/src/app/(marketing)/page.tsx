"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import MyDialog from "@/ui/dialog";
function marketing() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div>
      <h1>Marketing</h1>
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
      <MyDialog />
    </div>
  );
}

export default marketing;
