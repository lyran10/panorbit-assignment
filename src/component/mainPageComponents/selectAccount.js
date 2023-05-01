import React from "react";
import { data } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { menuItem } from "../redux/reducer";

export const SelectAccount = ({
  position,
  width,
  height,
  scrollDivHeight,
  showHeading,
  textSize,
}) => {
  // this props are used because this component is styled differently in main page and home page
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleClick = (id) => {
    navigate(`/home/${id}`)
    dispatch(menuItem("profile"))
  }

  return (
    <div className={`${position} ${width} bg-white ${height} rounded-2xl`}>
      <div
        className={`${showHeading} justify-center items-center h-[90px] bg-[#F5F5F5] rounded-t-2xl font-bold text-[20px]`}
      >
        <span>Select an account</span>
      </div>
      <div className={`users overflow-scroll ${scrollDivHeight} duration-500`}>
        {data.users.map((ele, index) => {
          return (
            // navigate to home page and put the id as a parameter so that it can be used to get the data of the specific user
            <div
              onClick={() => handleClick(ele.id)}
              key={index}
              className="p-2 flex items-center justify-start border-b-2 cursor-pointer"
            >
              <img
                className="inline-block h-12 w-12 rounded-full cursor-pointer ring-2 ring-white"
                src={ele.profilepicture}
                alt="image"
              />
              <span className={`${textSize} p-1`}>{ele.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
