import React, { useState, useEffect } from "react";
import { data } from "../../utils/data";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFillChatRightFill } from "react-icons/bs";
import { Chatbox } from "./chatBox";

export const UsersChatBox = () => {
  const [rotateArrow, setRotateArrow] = useState("rotate-0");
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  let [usersOnline, setUsersOnline] = useState([]);

  const handleOnlineArray = () => {
    let numberArray = Object.keys([...Array(data.users.length)]); // making an array with length of the users
    setUsersOnline(
      numberArray.map((ele) => {
        // replacing the elements with 0 and 1 (0 means offline  and 1 means online) check on line 72
        return Math.floor(Math.random() * 2);
      })
    );
  };

  useEffect(() => {
    handleOnlineArray(); // calling the function in use effect so that it will run once
  }, []);

  // toggle the height opacity and arrow of the div which is on line 37 for some animation
  const handleClick = () => {
    setShow((show) => !show);
    setRotateArrow((arrow) =>
      arrow === "rotate-0" ? "rotate-180" : "rotate-0"
    );
  };

  return (
    <section className="absolute bottom-2 right-[10%] duration-300">
      <div
        onClick={() => handleClick()}
        className="w-[200px] cursor-pointer bg-[#362FD9] h-[35px] rounded-t-lg flex justify-between items-center"
      >
        <div className="flex justify-center items-center gap-1 ms-2">
          <BsFillChatRightFill className="text-white mt-[1px]" />
          <span className="text-white font-semibold">Chats</span>
        </div>
        {/* rotate arrow when closed and opened */}
        <MdKeyboardArrowUp
          className={`text-white ${rotateArrow} duration-300 me-2`}
        />
      </div>
      <div
        className={`flex-col flex users bg-white ${
          show ? "opacity-1 h-[250px]" : "opacity-0 h-0 invisible"
        } transition duration-500 justify-start overflow-scroll gap-2 border-l-2 border-r-2 border-[#362FD9] items-start p-1 text-[12px]`}
      >
        {data.users.map((ele, index) => {
          let random = Math.floor(Math.random() * 2);
          return (
            // on click set the user with the data and send to chatBox component to show the data of the user with whom he wants to chat with
            <div
              onClick={() => setUser(ele)}
              key={index}
              className="flex justify-between items-center w-[100%] cursor-pointer"
            >
              <div className="flex justify-center items-center gap-1">
                <img
                  className="inline-block h-5 w-5 rounded-full cursor-pointer ring-2 ring-white"
                  src={ele.profilepicture}
                  alt="image"
                />
                <span>{ele.name}</span>
              </div>
              {/* online sign */}
              <span
                className={`h-2 w-2 rounded-full ${
                  usersOnline[index] === 1 ? "bg-[#00A300]" : "bg-gray-200"
                } `}
              ></span>
            </div>
          );
        })}
      </div>

      <Chatbox // sending data to display in the chatBox component
        user={user}
        setUser={setUser}
      />
    </section>
  );
};
