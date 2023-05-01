import React from "react";
import { Map } from "./map";

export const Address = ({ userData }) => {
  return (
    // users address in the hme page component
    <div className="p-2 px-[40px] w-[100%] md:w-[60%] lg:w-[60%] h-full justify-start flex-col gap-5 items-start flex">
      <span className="text-[17px] text-slate-500 font-semibold text-start w-full">
        Address :{" "}
      </span>
      <div className="w-[80%] flex flex-col gap-2 ms-[40px]">
        <span className="text-[17px] text-slate-500 font-semibold text-start">
          Street :{" "}
          <span className="text-black font-semibold">
            {userData.address.street}
          </span>
        </span>
        <span className="text-[17px] text-slate-500 font-semibold text-start">
          Suite :{" "}
          <span className="text-black font-semibold">
            {userData.address.suite}
          </span>
        </span>
        <span className="text-[17px] text-slate-500 font-semibold text-start">
          City :{" "}
          <span className="text-black font-semibold">
            {userData.address.city}
          </span>
        </span>
        <span className="text-[17px] text-slate-500 font-semibold text-start">
          Zipcode :{" "}
          <span className="text-black font-semibold">
            {userData.address.zipcode}
          </span>
        </span>
      </div>
      <Map userData={userData} />
    </div>
  );
};
