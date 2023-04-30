import React, { useState, useEffect } from "react";
import { SelectAccount } from "../mainPageComponents/selectAccount";

export const MainPage = () => {
  const [show, setshow] = useState(false);

  useEffect(() => {
    setshow(true);
  }, []);

  return (
    // show is true display this component
    <div
      className={`flex flex-col ${
        show ? "opacity-1" : "opacity-0"
      } duration-500 w-[100vw] h-[100vh] justify-center items-center bg-[#F6F1F1] relative`}
    >
      {/* component where the user account is selected and navigate to home page with the id in the URL parameter */}
      <SelectAccount
        position={"absolute"}
        width={"w-[40%]"}
        height={"h-[550px]"}
        scrollDivHeight={"h-[450px]"}
        showHeading={"flex"}
        textSize={"text-[20px]"}
      />

      {/* SVG in the main page */}
      <svg
        style={{ objectFit: "cover" }}
        id="my-svg"
        version="1"
        baseProfile="full"
        width="100%"
        height="100%"
        viewBox="0 0 1536 722"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1536" height="722" fill="#ebeee8"></rect>
        <path
          transform="scale(1, -1)"
          d="M 0,722 V 0,216 C 58.21538461538461,176.9794871794872 116.43076923076922,137.95897435897436 215,147 C 313.5692307692308,156.04102564102564 452.4923076923077,213.1435897435897 543,247 C 633.5076923076923,280.8564102564103 675.5999999999999,291.4666666666667 756,274 C 836.4000000000001,256.5333333333333 955.1076923076923,210.98974358974357 1053,184 C 1150.8923076923077,157.01025641025643 1227.9692307692308,148.57435897435897 1305,157 C 1382.0307692307692,165.42564102564103 1459.0153846153846,190.7128205128205 1536,216 C 1536,216 1536,722 1536,722 Z"
          stroke="none"
          strokeWidth="0"
          fill="#5f6afc90"
          className="transition-all duration-300 ease-in-out delay-150"
          style={{ transformOrigin: "center center" }}
        ></path>
        <path
          transform="scale(1, -1)"
          d="M 0,722 V 0,324 C 100.7794871794872,332.65128205128207 201.5589743589744,341.30256410256413 286,338 C 370.4410256410256,334.69743589743587 438.5435897435897,319.44102564102565 519,314 C 599.4564102564103,308.55897435897435 692.2666666666667,312.93333333333334 767,323 C 841.7333333333333,333.06666666666666 898.3897435897436,348.825641025641 990,367 C 1081.6102564102564,385.174358974359 1208.174358974359,405.7641025641026 1305,399 C 1401.825641025641,392.2358974358974 1468.9128205128204,358.1179487179487 1536,324 C 1536,324 1536,722 1536,722 Z"
          stroke="none"
          strokeWidth="0"
          fill="#5f6afcff"
          className="transition-all duration-300 ease-in-out delay-150"
          style={{ transformOrigin: "center center" }}
        ></path>
      </svg>
    </div>
  );
};
