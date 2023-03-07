import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-[#f9faf5]">
      <div className="flex">
        <Sidebar />
        <div className="grow">
          <Header />
          <div className=" h-[800px] ">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
