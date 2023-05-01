import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import { Header } from "./profile/header";
import { useSelector } from "react-redux";
import { ComingSoon } from "./comingSoon";

export const Todo = ({ header }) => {
  const menuItem = useSelector((state) => state.items.menuItem); // menu item is the item which are on the side nav(profile,posts,gallery,todo)
  const {id} = useParams();

  return (
    // if menu item equals to gallery then show gallery component it is dispatched to the reducer from the sideNav then stored in the store. It changes depending on which item we click
    <div
      className={`w-[100%] md:w-[80%] lg:w-[80%] flex flex-col static lg:absolute md:absolute ${
        menuItem === "todo" ? "opacity-1" : "opacity-0 invisible"
      } duration-500`}
    >
      {data.users.map((ele, index) => {
        if (ele.id == id) {
          // id equals to ele.id then dispaly data
          return (
            <div key={index} className="w-[100%] h-[100%]">
              {/* user data to display data in both the component and header props to display the header as todo*/}
              <Header userData={ele} header={header} />
              <ComingSoon />
            </div>
          );
        }
      })}
    </div>
  );
};
