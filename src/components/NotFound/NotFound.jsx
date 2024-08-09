import React from "react";
import errorImg from "../../assets/Images/404.jpg";
export function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center text-white main-height">
        <img src={errorImg} alt="" />
      </div>
    </>
  );
}
