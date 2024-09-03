import React from "react";

type HrProps = {
  size?: "xs" | "sm" | "md" | "lg"; // Define size options
  direction?: "horizontal" | "vertical"; // Define direction options
};

const Hr: React.FC<HrProps> = ({ size = "md", direction = "horizontal" }) => {
  // Tailwind CSS classes for size variations
  const sizeClasses = {
    xs: direction === "horizontal" ? "h-px w-10" : "w-px h-10",
    sm: direction === "horizontal" ? "h-px w-20" : "w-px h-24",
    md: direction === "horizontal" ? "h-px w-40" : "w-px h-40",
    lg: direction === "horizontal" ? "h-px w-80" : "w-px h-80",
  };

  return <div className={`bg-gray-300 ${sizeClasses[size]}`} />;
};

export default Hr;
