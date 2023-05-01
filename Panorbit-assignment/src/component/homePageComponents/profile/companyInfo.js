import React from "react";

export const CompanyInfo = ({ userData }) => {
  return (
    <>
      {/* company info in the home page component */}
      <span className="text-center my-2 text-[20px] font-semibold text-slate-500">
        Company
      </span>
      <div className="flex flex-col gap-2 w-[90%] justify-start items-start flex-wrap">
        <span className="text-[17px] text-slate-500 font-semibold text-start">
          Name :{" "}
          <span className="text-black font-semibold">
            {userData.company.name}
          </span>
        </span>
        <span className="text-[17px] text-slate-500 font-semibold text-start">
          Catchphrase :{" "}
          <span className="text-black font-semibold">
            {userData.company.catchPhrase}
          </span>
        </span>
        <span className="text-[17px] text-slate-500 font-semibold text-start">
          bs :{" "}
          <span className="text-black font-semibold">
            {userData.company.bs}
          </span>
        </span>
      </div>
    </>
  );
};
