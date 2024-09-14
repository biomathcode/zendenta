"use client";

import React from "react";
import { format } from "date-fns";
import {
  Authenticated,
  Unauthenticated,
  useConvexAuth,
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";
import { fetchQuery, preloadQuery } from "convex/nextjs";
import { Skeleton } from "./skeleton";

function UserGreeting() {
  // Get the current date and time
  const currentDate = new Date();

  // Determine the salutation based on the current time
  const currentHour = currentDate.getHours();
  let salutation = "Good morning";

  if (currentHour >= 12 && currentHour < 18) {
    salutation = "Good afternoon";
  } else if (currentHour >= 18) {
    salutation = "Good evening";
  }

  // Format the current date
  const formattedDate = format(currentDate, "EEEE, MMMM d, yyyy");

  const user = useQuery(api.users.viewer);

  console.log(user);

  return (
    <div className="flex flex-col gap-2 ">
      <Authenticated>
        <h1 className="text-lg font-bold ">
          {salutation}, {user?.email}!
        </h1>
      </Authenticated>
      <Unauthenticated>
        <Skeleton className=" w-32 h-2" />
      </Unauthenticated>

      <p className="text-gray-500">{formattedDate}</p>
    </div>
  );
}

export default UserGreeting;
