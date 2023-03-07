import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarsIcon from "@mui/icons-material/Stars";
import Image from "../assets/0a53c3bbe2f56a1ddac34ea04a26be98.jpg";
import AppsIcon from "@mui/icons-material/Apps";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <div className="flex items-center h-[80px] px-5 justify-between bg-[#f9faf5]">
      <div className="flex items-center gap-2">
        <StarsIcon className="text-yellow-400" />
        <h1 className="text-xl font-bold tracking-wider">Strata Insurance</h1>
        <KeyboardArrowDownIcon />
      </div>
      <div className="flex gap-4">
        <div>
          <img src={Image} className="rounded-full w-[50px] h-[50px]" />
        </div>
        <div className="flex justify-around items-center w-[150px] px-2 rounded-lg border-2 ">
          <AppsIcon />
          App
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex justify-center items-center gap-2 bg-[#D3F36B] rounded-lg px-4">
          <AddIcon />
          ADD NEW TASK
        </div>
      </div>
    </div>
  );
};

export default Header;
