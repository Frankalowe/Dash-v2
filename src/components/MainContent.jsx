import React from "react";
import BookIcon from "@mui/icons-material/Book";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import IosShareIcon from "@mui/icons-material/IosShare";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Widgets from "./Widgets";

const MainContent = () => {
  return (
    <div>
      <div>
        <div className="flex gap-5 px-10 border-b-2 pb-2 ">
          <div className="flex items-center  gap-2">
            <BookIcon />
            Backlog
          </div>
          <div className="flex items-center gap-2">
            <CenterFocusWeakIcon /> Priority Chart
          </div>
          <div className="flex items-center gap-2">
            <SignalCellularAltIcon />
            Kanban Workflow
          </div>
        </div>
        <div className="flex items-center justify-between py-2 px-4 border-b-2">
          <div className="">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search.."
              className="py-2 rounded-lg px-2 focus:outline-none bg-transparent"
            />
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
              <ToggleOnIcon fontSize="large" className="text-[#D3F36B]" />
              Select TimeFrame
              <KeyboardArrowUpIcon className="text-gray-400" />
            </div>
            <div className="flex gap-2 items-center">
              <IosShareIcon />
              Share
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-5 flex flex-col justify-center items-center">
        {/* widget */}
        <div className="flex gap-20">
          <div>
            <div className="flex justify-between text-gray-400 mb-2">
              <div>To do</div>
              <MoreVertIcon />
            </div>
            <Widgets />
            <Widgets />
            <Widgets />
          </div>
          <div>
            <div className="flex justify-between  text-gray-400 mb-2">
              <div>In Progress</div>
              <MoreVertIcon />
            </div>
            <Widgets />
            <Widgets />
            <Widgets />
          </div>
          <div>
            <div className="flex justify-between  text-gray-400 mb-2">
              <div>Finished</div>
              <MoreVertIcon />
            </div>
            <Widgets />
            <Widgets />
            <Widgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
