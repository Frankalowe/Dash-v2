import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const Widgets = () => {
  return (
    <div className=" w-[300px] h-[150px] bg-white rounded-lg my-10">
      <div className="py-2 px-4">
        <div className="flex justify-between">
          <AccountCircleIcon className="text-orange-600" />
          <div className="text-sm flex items-center justify-center text-orange-500 font-bold bg-orange-100 rounded-lg w-10 ">
            High
          </div>
        </div>
        <div className="mt-4">A/B Testing - Round 3</div>
        <div className="flex gap-2">
          <div className="text-purple-600 bg-purple-100 rounded-full flex justify-center px-2">
            Prototype
          </div>
          <div className="text-pink-600 bg-pink-100 rounded-full flex justify-center px-2">
            Research
          </div>
        </div>
        <div className="text-[12px] text-gray-400 flex justify-start items-center mt-2 gap-2">
          <CalendarTodayIcon fontSize="small" />5 Sept 2022 - 5 Oct 2022
        </div>
      </div>
    </div>
  );
};

export default Widgets;
