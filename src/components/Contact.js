import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gradient-to-r from-cyan-200 to-cyan-800 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-50 px-6 flex items-center mt-4">
              <h2 className="text-black font-bold tracking-widest text-xs">
                EMAIL: mattias-kallstrom@hotmail.com
              </h2>
              <div className="flex m-2">
                <a href="https://github.com/MattiasKallstrom">
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="" />{" "}
                </a>
                <a href="https://www.linkedin.com/in/mattias-k%C3%A4llstr%C3%B6m-061b73193/">
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin-circled--v1.png" alt="" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
