import Navbar from "@/components/shared/Navbar";
import React from "react";

const CommonLayout = ({children}:Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;
