import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/data";
import { UserInfo } from "./userInfo";
import { Header } from "./header";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { id } = useParams(); // id from the parameter
  const menuItem = useSelector((state) => state.items.menuItem); // menu item is the item which are on the side nav(profile,posts,gallery,todo)

  return (
    <>
      {data.users.map((ele, index) => {
        if (ele.id == id) {
          // id equals to ele.id then dispaly data
          return (
            // if menu item equals to profile then show profile component it is dispatched to the reducer from the sideNav then stored in the store. It changes depending on which item we click
            <div
              key={index}
              className={`w-[100%] md:w-[80%] lg:w-[80%] flex flex-col static lg:absolute md:absolute duration-500 ${
                menuItem === "profile" ? "opacity-1" : "opacity-0 invisible"
              }`}
            >
              {/* user data to display data in both the component and header props to display the header as profile*/}
              <Header userData={ele} header="Profile" />
              <UserInfo userData={ele} />
            </div>
          );
        }
      })}
    </>
  );
};
