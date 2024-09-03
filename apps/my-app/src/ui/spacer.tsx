import React from "react";

type SpacerProps = {
  size?: "small" | "medium" | "large"; // Define size options
  direction?: "horizontal" | "vertical"; // Define direction options
};

const Spacer: React.FC<SpacerProps> = ({
  size = "medium",
  direction = "horizontal",
}) => {
  // Map size prop to Tailwind CSS classes for width (horizontal) or height (vertical)
  const sizeClasses = {
    small: direction === "horizontal" ? "w-2" : "h-2", // Adjust as needed
    medium: direction === "horizontal" ? "w-4" : "h-4", // Adjust as needed
    large: direction === "horizontal" ? "w-8" : "h-8", // Adjust as needed
  };

  return <div className={`inline-block ${sizeClasses[size]}`}></div>;
};

export default Spacer;
