import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { menuItem } from "../redux/reducer";

export const SideNav = () => {
  const dispatch = useDispatch();
  let data = ["Profile", "Posts", "Gallery", "ToDo"]; // array of the items to display
  const [items, setItems] = useState("profile"); // item for animation

  // depeneding on what is sent from here to the reducer will be displayed in the UI. For example if clicked on the element whose e.target.id is equal to profile, it will display the profile component, same goes with everyone.
  const handleClick = (e) => {
    let id = e.target.id.toLowerCase();
    dispatch(
      menuItem(
        id === "profile"
          ? "profile"
          : id === "posts"
          ? "posts"
          : id === "gallery"
          ? "gallery"
          : "todo"
      )
    );
    setItems(id);
  };

  return (
    <div className="w-[50%] md:w-[20%] lg:w-[20%] h-[600px] relative bg-[#2F58CD] overflow-hidden flex justify-center items-center rounded-lg">
      <ul className="h-[100%] relative flex justify-center items-start flex-col gap-3 w-full">
        {data.map((ele, index) => {
          return (
            <li
              key={index}
              onClick={(e) => handleClick(e)}
              className="flex w-full justify-between cursor-pointer"
            >
              {/* if items equals to ele.toLowerCase() then it will make the text white and bold */}
              <span
                id={`${ele}`}
                className={`p-2 ms-5 ${
                  items === ele.toLowerCase()
                    ? "text-white font-bold"
                    : "text-gray-300"
                } border-b-2 text-start w-[90%] border-gray-300`}
              >
                {ele}
              </span>
              {/* if items equals to ele.toLowerCase() then it will show this shape for the specific element which is created with tailwind classes */}
              <div
                className={`w-[30px] h-[30px] rounded-l-full duration-300 bg-[#F5F5F5] ${
                  items === ele.toLowerCase() ? "opacity-1" : "opacity-0"
                } relative right-0 before:content-"" before:absolute before:w-[20px] before:h-[20px] before:rounded-ee-full before:shadow-before before:bg-transparent before:bottom-0 before:-top-[20px] after:content-"" after:absolute after:w-[20px] after:h-[20px] after:rounded-se-full after:shadow-after after:bg-transparent after:-bottom-[20px]`}
              >
                <MdOutlineKeyboardArrowRight
                  size={20}
                  className="mt-[5px] ms-[10px] z-50 relative text-gray-300"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
