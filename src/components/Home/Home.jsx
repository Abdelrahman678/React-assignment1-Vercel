import React from "react";
import avatarImage from "../../assets/Images/avatar.svg";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center my-main-bg text-white main-height">
        <div className="text-center">
          <img src={avatarImage} className="w-2/3 mx-auto" alt="" />
          <div className="text-center uppercase mt-5">
            <h2 className="text-4xl font-bold mb-5">start Framework</h2>
            <div className="flex justify-center items-center mb-3">
              <div className="line-white me-3"></div>
              <i className="fa-solid fa-star text-xl"></i>
              <div className="line-white ms-3"></div>
            </div>
          </div>
          <p className="mt-5">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
