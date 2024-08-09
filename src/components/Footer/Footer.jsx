import React from "react";

export function Footer() {
  return (
    <>
      <footer className="main-nav-footer-bg text-center  lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="container mx-auto">
            <div className="my-row text-white">
              {/* <!-- Location section --> */}
              <div className="w-full mb-10 md:w-1/3 text-center ">
                <h6 className="mb-4 text-2xl font-bold">LOCATION</h6>
                <p className="mb-4">
                  <a className="font-semibold">2215 John Daniel Drive</a>
                </p>
                <p className="mb-4">
                  <a className="font-semibold">Clark, MO 65243</a>
                </p>
              </div>
              {/* <!-- Useful links section --> */}
              <div className="w-full mb-10 md:w-1/3 text-center">
                <h6 className="mb-4 text-2xl font-bold">AROUND THE WEB</h6>
                <div className="icons text-lg">
                  <i className="fa-brands fa-facebook mx-1 icon"></i>
                  <i className="fa-brands fa-twitter icon mx-5"></i>
                  <i className="fa-brands fa-linkedin-in icon mx-5"></i>
                  <i className="fa-solid fa-globe mx-1 icon"></i>
                </div>
              </div>
              {/* <!-- ABOUT FREELANCER section --> */}
              <div className="w-full md:w-1/3 text-center">
                <h6 className="mb-4 text-2xl font-bold">ABOUT FREELANCER</h6>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="secondary-nav-footer-bg p-6 text-center text-white">
          <span>Copyright © Your Website 2021</span>
        </div>
      </footer>
    </>
  );
}
