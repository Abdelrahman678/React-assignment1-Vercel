import React from "react";

export function Contact() {
  return (
    <>
      <div className="text-center uppercase my-10 main-color">
        <h2 className="text-3xl md:text-5xl font-bold mb-5">conatct section</h2>
        <div className="flex justify-center items-center mb-3">
          <div className="line me-3"></div>
          <i className="fa-solid fa-star text-xl"></i>
          <div className="line ms-3"></div>
        </div>
      </div>

      <div className="w-4/5 md:w-2/5 mx-auto py-10">
        <input
          type="text"
          placeholder="userName"
          className="border border-transparent w-full mb-10 border-b-slate-400 py-3 focus-visible:outline-none"
        />
        <input
          type="number"
          placeholder="userAge"
          className="border border-transparent w-full mb-10 border-b-slate-400 py-3 focus-visible:outline-none"
        />
        <input
          type="email"
          placeholder="userEmail"
          className="border border-transparent w-full mb-10 border-b-slate-400 py-3 focus-visible:outline-none"
        />
        <input
          type="password"
          placeholder="userPassword"
          className="border border-transparent w-full mb-10 border-b-slate-400 py-3 focus-visible:outline-none"
        />

        <button className="py-2 px-3 my-main-bg rounded-lg text-white">
          Send Message
        </button>
      </div>
    </>
  );
}
