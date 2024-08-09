import React from "react";

export function About() {
  return (
    <>
      <div className="flex justify-center items-center my-main-bg text-white main-height">
        <div className="text-center">
          <div className="text-center uppercase">
            <h2 className="text-4xl font-bold mb-5">about component</h2>
            <div className="flex justify-center items-center mb-3">
              <div className="line-white me-3"></div>
              <i className="fa-solid fa-star text-xl"></i>
              <div className="line-white ms-3"></div>
            </div>
          </div>
          <div className="container mx-auto mt-5">
            <div className="my-row">
              <div className="w-1/2 text-start p-2">
                <p className="md:w-2/3 ms-auto">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="w-1/2 text-start p-2">
                <p className="md:w-2/3 me-auto">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
