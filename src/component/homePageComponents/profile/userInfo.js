import React from "react";
import { CompanyInfo } from "./companyInfo";
import { Address } from "./address";

export const UserInfo = ({ userData }) => {
  return (
    <div className="w-full flex flex-col md:flex-row lg:flex-row p-2">
      <div className="w-[100%] md:w-[40%] lg:w-[40%] h-full md:border-r-2 lg:border-r-2 border-r-0">
        <div className="p-2 flex items-center flex-col justify-start">
          <div className="flex flex-col justify-center items-center gap-1">
            <img
              className="inline-block h-[150px] w-[150px] rounded-full cursor-pointer ring-2 ring-white"
              src={userData.profilepicture}
              alt="image"
            />
            <span className="text-[20px] text-slate-500 font-semibold p-1">
              {userData.name}
            </span>
          </div>
          <div className="flex flex-col gap-2 w-[90%] justify-start items-start flex-wrap border-b-2 py-3">
            <span className="text-[17px] text-slate-500 font-semibold text-start">
              User name :{" "}
              <span className="text-black font-semibold">
                {userData.username}
              </span>
            </span>
            <span className="text-[17px] text-slate-500 font-semibold text-start">
              Email :{" "}
              <span className="text-black font-semibold">{userData.email}</span>
            </span>
            <span className="text-[17px] text-slate-500 font-semibold text-start">
              Phone :{" "}
              <span className="text-black font-semibold">{userData.phone}</span>
            </span>
            <span className="text-[17px] text-slate-500 font-semibold text-start">
              Website :{" "}
              <span className="text-black font-semibold">
                {userData.website}
              </span>
            </span>
          </div>
          {/* company info is under the userinfo in the UI */}
          <CompanyInfo userData={userData} />
        </div>
      </div>
      {/* address is on the right side of userinfo in the UI */}
      <Address userData={userData} />
    </div>
  );
};
