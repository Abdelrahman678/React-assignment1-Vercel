import React from "react";
import img1 from "../../assets/Images/poert1.png";
import img2 from "../../assets/Images/port2.png";
import img3 from "../../assets/Images/port3.png";

export function Portfolio() {
  return (
    <>
      <div className="text-center uppercase my-10 text-3xl md:text-5xl font-bold main-color">
        <h2 className="text-3xl md:text-5xl font-bold mb-5">
          portfolio component
        </h2>
        <div className="flex justify-center items-center mb-3">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star text-xl"></i>
          <div className="line ms-3"></div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="my-row">
          <div className="w-full mb-3 md:w-1/3 px-2">
            <div class="rounded-md overflow-hidden relative">
              <img alt="" class="w-full rounded-md" src={img1} />
              <div class="layer hover:opacity-100 absolute start-0 w-full top-0 h-full flex justify-center items-center">
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="w-full mb-3 md:w-1/3 px-2">
            <div class="rounded-md overflow-hidden relative">
              <img alt="" class="w-full rounded-md" src={img2} />
              <div class="layer hover:opacity-100 absolute start-0 w-full top-0 h-full flex justify-center items-center">
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="w-full mb-3 md:w-1/3 px-2">
            <div class="rounded-md overflow-hidden relative">
              <img alt="" class="w-full rounded-md" src={img3} />
              <div class="layer hover:opacity-100 absolute start-0 w-full top-0 h-full flex justify-center items-center">
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="w-full mb-3 md:w-1/3 px-2">
            <div class="rounded-md overflow-hidden relative">
              <img alt="" class="w-full rounded-md" src={img1} />
              <div class="layer hover:opacity-100 absolute start-0 w-full top-0 h-full flex justify-center items-center">
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="w-full mb-3 md:w-1/3 px-2">
            <div class="rounded-md overflow-hidden relative">
              <img alt="" class="w-full rounded-md" src={img2} />
              <div class="layer hover:opacity-100 absolute start-0 w-full top-0 h-full flex justify-center items-center">
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="w-full mb-3 md:w-1/3 px-2">
            <div class="rounded-md overflow-hidden relative">
              <img alt="" class="w-full rounded-md" src={img3} />
              <div class="layer hover:opacity-100 absolute start-0 w-full top-0 h-full flex justify-center items-center">
                <i class="text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
