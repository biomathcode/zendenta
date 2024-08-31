"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
function marketing() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div>
      <h1>Marketing</h1>
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </div>
  );
}

export default marketing;
