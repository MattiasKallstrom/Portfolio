import React from "react";
import MyFace from "../assets/MyFace.jpg";
import CV from "../assets/CV.pdf";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Mattias Källström 
            <br></br>
            <br className="hidden lg:inline-block" />
            Frontend Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            Curious junior frontend developer with a focus on JavaScript.<br></br>
            Confident in React.js and TypeScript alike.
          </p>
          <p className="mb-8">
            Shoot me an email at: mattias-kallstrom@hotmail.com
          </p>
          <div className="flex justify-center">
            <a
              href={CV}
              className="inline-flex text-white bg-gradient-to-r from-cyan-200 to-cyan-800 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-l from-cyan-800 to-cyan-200 rounded text-lg"
            >
              CV
            </a>
          </div>
        </div>{" "}
        <div className="lg:max-w-lg flex justify-center md:w-1/2 w-5/6">
          <img className="max-w-sm w-40 md:w-full rounded-xl" alt="hero" src={MyFace} />
        </div>
      </div>
    </section>
  );
}
