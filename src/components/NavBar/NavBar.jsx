import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
  const [hide, setHide] = useState(true);
  function toggleHide() {
    setHide(!hide);
  }
  return (
    <>
      {/* first Try */}
      {/* <div className="main-nav-footer-bg text-white fixed top-0 left-0 right-0 uppercase py-5">
            <div className="container mx-auto flex justify-between items-center font-bold p-5">
                <div className="text-3xl ms-10">
                    <NavLink to={""}>Start Framework</NavLink>
                </div>
                <div>
                    <ul className="flex justify-between items-center">
                        <li className="me-10">
                            <NavLink to={"about"}>About</NavLink>
                        </li>
                        <li className="me-10">
                        <NavLink to={"portfolio"}>Portfolio</NavLink>
                        </li>
                        <li className="me-10">
                        <NavLink to={"contact"}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
      {/* Second Try */}
      <div className="main-nav-footer-bg text-white fixed top-0 left-0 right-0 uppercase py-3 z-50">
        <div className="container mx-auto font-bold p-5 flex flex-col">
          <div className="flex justify-between items-baseline">
            <div className="text-3xl">
              <Link to={""}>Start Framework</Link>
            </div>
            <div className="text-3xl lg:hidden">
              <i
                className="fa-solid fa-bars cursor-pointer"
                onClick={() => {
                  toggleHide();
                }}
              ></i>
            </div>
            <div className="hidden lg:block">
              <ul className="flex justify-between items-center">
                <li className="me-10">
                  <NavLink to={"about"} className="rounded-lg py-3 px-5">
                    About
                  </NavLink>
                </li>
                <li className="me-10">
                  <NavLink to={"portfolio"} className="rounded-lg py-3 px-5">
                    Portfolio
                  </NavLink>
                </li>
                <li className="me-10">
                  <NavLink to={"contact"} className="rounded-lg py-3 px-5">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-5 lg:hidden">
            <ul
              className={
                hide
                  ? "hidden flex flex-col justify-between items-start"
                  : "block flex flex-col justify-between items-start"
              }
            >
              <li className="my-5">
                <NavLink to={"about"} className="rounded-lg py-3 px-5">
                  About
                </NavLink>
              </li>
              <li className="mb-5">
                <NavLink to={"portfolio"} className="rounded-lg py-3 px-5">
                  Portfolio
                </NavLink>
              </li>
              <li className="">
                <NavLink to={"contact"} className="rounded-lg py-3 px-5">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
