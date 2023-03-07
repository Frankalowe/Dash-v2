import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SquareIcon from "@mui/icons-material/Square";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [click, setClick] = useState(false);
  return (
    <div className="w-[200px] bg-[#f9faf5] h-screen px-4 sticky left-0 border-r-2 border-gray-300">
      {/* title */}
      <div className="flex flex-col justify-center items-center h-[80px]">
        <div className="font-bold tracking-wider text-xl text-black ">
          Dashboard V-2
        </div>
      </div>
      {/* Tabs */}
      <div className="mt-5">
        <div className="flex justify-center items-center gap-2 bg-[#D3F36B] rounded-sm py-2">
          <AddIcon />
          ADD NEW TASK
        </div>
        <div className="flex flex-col justify-start my-5 space-y-4">
          <div className="flex gap-2 text-black font-bold">
            <CalendarMonthIcon />
            Plan
          </div>
          <div className="flex gap-2 text-black font-bold">
            <ContentPasteIcon />
            Task List
          </div>
          <div className="flex gap-2 text-black font-bold justify-between">
            <div className="flex gap-2">
              <InsertDriveFileIcon />
              Projets
            </div>
            <div>
              <KeyboardArrowDownIcon
                onClick={() => setClick((prev) => !prev)}
              />
            </div>
          </div>
          {click && (
            <div className="flex flex-col px-5 transition-all">
              <ul className="">
                <li className="flex gap-2 items-center">
                  <SquareIcon fontSize="small" className="text-red-200" />
                  Meridian
                </li>
                <li className="flex gap-2 items-center">
                  <SquareIcon fontSize="small" className="text-blue-200" />
                  Skrill
                </li>
                <li className="flex gap-2 items-center">
                  <SquareIcon fontSize="small" className="text-yellow-200" />
                  Risen
                </li>
                <li className="flex gap-2 items-center">
                  <AddIcon />
                  Add new
                </li>
              </ul>
            </div>
          )}
          <div className="flex gap-2 text-black font-bold">
            <SellOutlinedIcon />
            Tags
          </div>
        </div>
      </div>
      {/* tabs end */}
      <div className="fixed left-4 bottom-0 ">
        <div className="flex gap-2 text-black font-bold">
          <CreditCardOutlinedIcon />
          Free Plan
        </div>
        <div className="font-bold flex grow justify-between mt-2">
          <div>Projects</div>
          <div className="font-normal">1/4</div>
        </div>
        <div className="w-full h-1 bg-green-200 my-2">
          <div className="w-[40%] h-1 bg-green-500"></div>
        </div>
        <div className="font-bold flex justify-between mt-2">
          <div>Tasks</div>
          <div className="font-normal">unlimited</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
