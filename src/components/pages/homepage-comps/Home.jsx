import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import MobileSocialLinks from "./MobileSocialLinks";

const Home = () => {
  return (
    <section name="Home" className="relative w-full md:h-screen h-unset">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8">
        <div className="flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4">
            {" "}
            Hello ,I'm Esraa Abdelnasser
          </h1>
          <h2 className="rounded-md bg-primary-color/20 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white">
            Frontend Developer
          </h2>
          <p className="text-gray-300 py-4 max-x-md text-justify">
         I'm Esraa, a 22-year-old junior front-end developer passionate about building
  responsive and user-friendly web apps using React.js and modern web
  technologies. Always eager to learn and take on new challenges.
          </p>

          <div className="hidden desktop:flex">
            <Link
              to="About"
              smooth
              duration={500}
              className="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0"
            >
              About me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <MobileSocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Home;
