import React from "react";

export const Messages = () => {
  let messages = [
    "Hi",
    "How are you?",
    "I am good",
    "Wanna go for lunch today?",
    "cool",
  ]; // messages in an array

  return (
    <div className="text-[13px] p-1 w-[100%] h-[100%] flex flex-col gap-5">
      {messages.map((msg, index) => {
        // if its an even number align the message in the start if no align in the end
        return (
          <p key={index} className={`${index % 2 === 0 ? "text-start" : "text-end"}`}>
            <span className="text-white p-1 px-2 bg-[#362FD9] rounded-xl">
              {msg}
            </span>
          </p>
        );
      })}
    </div>
  );
};
