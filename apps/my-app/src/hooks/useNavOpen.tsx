"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context
interface NavContextType {
  width: string;
  toggleNav: () => void;
}

// Create the context with default values
const NavContext = createContext<NavContextType | undefined>(undefined);

// Create a provider component
export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState("280px");

  const toggleNav = () => {
    setWidth((prevWidth) => (prevWidth === "280px" ? "80px" : "280px"));
  };

  return (
    <NavContext.Provider value={{ width, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};

// Create a custom hook to use the NavContext
export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
