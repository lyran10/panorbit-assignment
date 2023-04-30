import React from "react";
import { MdClose, MdSend } from "react-icons/md";
import { Messages } from "./messages";

export const Chatbox = ({ user, setUser }) => {
  return (
    <>

      {user !== "" ? ( // if empty string means no data in user so will display nothing
        <div className="absolute w-[200px] left-0 bottom-0 -translate-x-[250px]">
          <div className=" bg-[#362FD9]  min-h-[35px] rounded-t-lg flex justify-between items-center">
            <div className="flex justify-center gap-2 items-center ms-2">
              <img
                className="inline-block h-5 w-5 rounded-full cursor-pointer ring-2 ring-white"
                src={user?.profilepicture}
                alt="image"
              />
              <span className="text-white text-start font-semibold">
                {user?.name}
              </span>
            </div>
            <MdClose // click on this icon will set the user to empty string which will not show the chat box as there is no data
              onClick={() => setUser("")} 
              className={`text-white cursor-pointer me-2 duration-300`}
            />
          </div>
          <div className="h-[200px] bg-white border-l-2 border-r-2 border-[#362FD9]">
            <div className="h-[80%] border-b-2 overflow-scroll users">
              <Messages // created some messages to display in the messages component
              /> 
            </div>
            <div className="h-[20%] border-b-2 flex justify-end items-center">
              <MdSend // send icon to send messages 
               size={20} className="text-[#362FD9] me-2" />
            </div>
          </div>
        </div>
      ) : null}
      
    </>
  );
};
