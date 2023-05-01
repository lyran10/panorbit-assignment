import React, { useEffect, useState } from "react";
import { SideNav } from "../homePageComponents/sideNav";
import { Profile } from "../homePageComponents/profile/profile";
import { Gallery } from "../homePageComponents/gallery";
import { useSelector } from "react-redux";
import { UsersChatBox } from "../homePageComponents/chats/usersChatBox";
import { Posts } from "../homePageComponents/posts";
import { Todo } from "../homePageComponents/todo";

export const HomePage = () => {
  const [show, setshow] = useState(false);
  const menuItem = useSelector((state) => state.items.menuItem);

  useEffect(() => {
    setshow(true);
  }, []);

  return (
       // show is true display this component
    <div
      className={`relative ${
        show ? "opacity-1" : "opacity-0"
      } duration-500 md:min-h-[100vh] p-3 lg:min-h-[100vh] md:gap-5 lg:gap-5 flex flex-col md:flex-row lg:flex-row justify-center items-center bg-[#F5F5F5]`}
    >
      <SideNav />
      {/* on lg and md screen show this div */}
      <div className="w-[95%] hidden md:flex lg:flex md:flex-row lg:flex-row justify-center items-center">
        {/* four of the components has been given position as absolute so that they will be one on each other and opacity as 0(hide), so for example if menuItem equals to profile so only the opacity of profile component will be 1(show), same for the others also */}
        <Profile />
        <Posts header={"Posts"} />
        <Gallery header={"Gallery"} />
        <Todo header={"To Do"} />
      </div>
      {/* on sm screen show this div */}
      <div className="block md:hidden lg:hidden">
        {menuItem === "profile" ? (
          <Profile />
        ) : menuItem === "posts" ? (
          <Posts header={"Posts"} />
        ) : menuItem === "gallery" ? (
          <Gallery header={"Gallery"} />
        ) : (
          <Todo header={"To Do"} />
        )}
      </div>
      {/* this is the box where the users are displayed with the online sign */}
      <UsersChatBox />
    </div>
  );
};
