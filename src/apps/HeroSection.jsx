import { Typewriter } from "react-simple-typewriter";
import SayHalo from "../images/wave.gif";
import { IoMdDocument } from "react-icons/io";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTheme } from "../hooks/ThemeContext";
import Me from "../images/rendy.png";
import Sparkle from "../images/Sparkle.jpeg";
import { RiScrollToBottomLine } from "react-icons/ri";
const HeroSection = ({ yourname }) => {
  const { isNightMode } = useTheme();
  return (
    <section className="relative  w-full md:h-screen flex items-center justify-center">
      <div className="container p-6 gap-6 flex flex-col-reverse justify-center  items-center md:flex-row">
        <div className="left dark:text-slate-200  ">
          <h1 className="flex items-center gap-3  lg:text-4xl text-2xl font-bold ">
            Hi, <span className="text-red-500 ">{yourname}</span>{" "}
            <span>
              <img
                src={SayHalo}
                alt="say-hello"
                className="lg:w-12 lg:h-12 w-8 h-8 mb-1"
              />
            </span>
          </h1>
          <h2 className="lg:text-5xl text-2xl font-bold my-2">
            <span className="text-red-500">I{"'"}m</span> Rendy
          </h2>
          <h3 className="text-3xl mt-3 md:text-4xl dark:text-slate-200">
            I{"'"}m{" "}
            <span className="lg:text-4xl text-2xl font-montserrat font-bold text-red-500">
              <Typewriter
                words={["Front End", "Web Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={200}
                deleteSpeed={200}
                delaySpeed={180}
              />
            </span>
          </h3>
          <p className="font-semibold w-full text-lg md:text-xl md:w-[70%] my-3 ">
            I am a Front End web developer who enjoys building beautiful web
            applications that delivers a better user experience.
          </p>
          <div className="socials my-4 text-4xl text-white flex gap-3  justify-start">
            <a
              href="https://www.instagram.com/rnd_arstls?igsh=bWZiNjNqNmhybGps"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill className="p-1" />
            </a>
            <a
              href="https://www.linkedin.com/in/rendy-b232b1248/"
              rel="noopener noreferrer"
              target="_blank"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
            >
              <FaLinkedin className="p-1" />
            </a>
            <a
              href="https://wa.me/6283122895534"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
            >
              <FaWhatsapp className="p-1" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081835780873&mibextid=2JQ9oc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
            >
              <FaFacebookSquare className="p-1" />
            </a>
            <a
              href="https://github.com/rendy278"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:shadow-lg hover:scale-105 bg-red-500 rounded-lg"
            >
              <GrGithub className="p-1" />
            </a>
          </div>
          <div className="flex mt-4 gap-3">
            <button className="p-3 rounded-md  bg-transparent border dark:border-slate-200 dark:text-slate-200 border-gray-700 text-gray-700 duration-300 transition-all hover:text-slate-200 hover:bg-red-500 font-bold ">
              <a href="">Contact Me</a>
            </button>
            <button className="p-2.5 flex justify-center items-center rounded-md text-white bg-red-500 font-bold ">
              <IoMdDocument size={20} />
              Download CV
            </button>
          </div>
        </div>
        <div className="right ">
          <div className="circle w-52 h-52 sm:w-60 sm:h-60 md:w-[18rem] md:h-[18rem] lg:w-[24rem] lg:h-[24rem] border-2 border-yellow-400 ">
            <img
              src={isNightMode ? Me : Sparkle}
              alt="profile"
              className="h-60 md:h-72 lg:h-96 dark:h-fit"
            />
          </div>
        </div>
      </div>
      <div className="scroll text-4xl cursor-pointer absolute hidden  md:flex flex-col  dark:text-white md:bottom-24 lg:bottom-5  justify-center items-center">
        <RiScrollToBottomLine className="animate-bounce" />
        <p className="text-lg font font-semibold animate-pulse">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
