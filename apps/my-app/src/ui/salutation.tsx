import React from "react";
import { format } from "date-fns";

const UserGreeting = () => {
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

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-lg font-bold ">{salutation}, Pratik!</h1>
      <p className="text-gray-500">{formattedDate}</p>
    </div>
  );
};

export default UserGreeting;
