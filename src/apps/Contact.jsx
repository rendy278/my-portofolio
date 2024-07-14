import Title from "../components/Title";
import ContactImg from "../images/contactImg.png";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Contact = () => {
  return (
    <section
      id="contact"
      className="h-full w-full gap-4 flex p-6 flex-col justify-center items-center  pb-20 md:pb-0 dark:text-slate-200 "
    >
      <div className="flex flex-col w-full justify-start gap-3 items-start">
        <Title title="Contact" />
        <h1 className="text-lg md:text-3xl font-reddit-sans">
          Feel free to contact me if you have any questions or just want to say
          hi
        </h1>
      </div>
      <div className="container gap-5 pb-6 flex flex-col md:flex-row justify-between  items-center">
        <div className="left w-full md:w-[80%] lg:w-[50%]">
          <div className="p-6 w-full  dark:text-gray-700 flex flex-col justify-start items-start gap-3 rounded-md bg-slate-200 shadow-lg shadow-zinc-900 ">
            <img
              src={ContactImg}
              alt="Contact-img"
              className=" object-cover w-full h-52 md:h-60 rounded-md"
            />
            <h1 className="text-2xl text-red-500 md:text-4xl font-bold font-crete-round">
              Rendy
            </h1>
            <strong className="text-xl md:text-2xl">Front End Developer</strong>
            <p className="text-red-500 font-reddit-sans">
              I am a Front End web developer who enjoys building beautiful web
              applications that delivers a better user experience.
            </p>
            <h2 className="font-semibold">
              Phone : <span className="text-red-500">(+62) 83122895534</span>
            </h2>
            <h2 className="font-semibold">
              Email :{" "}
              <span className="text-red-500">kepolaumautauaja@gmail.com</span>
            </h2>
            <h1 className="text-xl md:text-3xl font-bold font-crete-round">
              Find Me In :
            </h1>
            <div className="socials text-3xl  md:text-4xl text-slate-100 flex gap-3  justify-start">
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
          </div>
        </div>
        <div className="right w-full h-full dark:text-gray-700">
          <form
            action=""
            className="p-6 flex flex-col justify-center items-center gap-3 rounded-md bg-slate-200 shadow-lg shadow-zinc-900 "
          >
            <div className="flex flex-col gap-3 justify-start items-start w-full md:justify-center md:items-center lg:flex-row">
              <span className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-lg">
                  Your Name :
                </label>
                <input
                  className="p-2 bg-slate-100 w-full  rounded-md outline-red-500"
                  type="text"
                  placeholder="Your Name"
                />
              </span>
              <span className="flex flex-col gap-2 w-full">
                <label htmlFor="phone" className="text-lg">
                  Phone Number :
                </label>
                <input
                  className="p-2 bg-slate-100 w-full  rounded-md outline-red-500"
                  type="number"
                  placeholder="Phone Number"
                />
              </span>
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <label htmlFor="email" className="text-lg">
                Email :
              </label>
              <input
                className="p-2 bg-slate-100 w-full rounded-md outline-red-500"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <label htmlFor="email" className="text-lg">
                Subject :
              </label>
              <input
                className="p-2 bg-slate-100 w-full rounded-md outline-red-500"
                type="email"
                placeholder="Subject"
              />
            </div>
            <div className="w-full flex flex-col gap-y-3">
              <label htmlFor="email" className="text-lg">
                Message :
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                className="p-2 bg-slate-100 w-full rounded-md outline-red-500"
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-red-500 font-bold text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
