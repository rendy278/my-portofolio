import Tabs from "../components/Tabs";
import {
  webproject,
  webapp,
  machinelearn,
  gameproject,
} from "../constant/project";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const projectTabs = [
    {
      title: "Website",
      content: (
        <div className="flex flex-wrap w-full font-reddit-sans  justify-center items-center  gap-3 dark:text-gray-700 mx-auto">
          {webproject.map((web, index) => {
            return (
              <article
                key={index}
                className="mockup-browser w-72 sm:w-80 lg:w-96 bg-slate-200 dark:border-slate-300 shadow-md shadow-zinc-400 border-gray-600 border"
              >
                <div className="mockup-browser-toolbar ">
                  <button className=" input  border-gray-600 border">
                    <a href={web.link}>{web.link}</a>
                  </button>
                </div>
                <figure className="border-base-300 flex justify-center border-t ">
                  <img
                    src={web.image}
                    alt={web.name}
                    className="w-full h-40 md:h-60 object-cover"
                  />
                </figure>
                <div className="p-3 flex flex-col gap-2">
                  <div className="title flex flex-wrap justify-between gap-2 items-center w-full">
                    <strong className="text-lg">
                      <h1 className="font-bold ">{web.title}</h1>
                      <a
                        href={web.repository}
                        className="flex items-center font-semibold justify-start gap-2"
                      >
                        <FaGithub />{" "}
                        <span className="underline">Repository</span>
                      </a>
                    </strong>
                    <strong>{web.build} </strong>
                  </div>
                  <a
                    href={web.link}
                    className="p-3 flex justify-center items-center  hover:scale-95 duration-200 transition-all bg-red-600 glass text-slate-200 rounded-md font-bold"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ),
    },
    {
      title: "Games",
      content: (
        <div className="flex flex-wrap w-full font-reddit-sans  justify-center items-center  gap-3 dark:text-gray-700 mx-auto">
          {gameproject.map((web, index) => {
            return (
              <article
                key={index}
                className="mockup-browser w-72 sm:w-80 lg:w-96 bg-slate-200 dark:border-slate-300 shadow-md shadow-zinc-400 border-gray-600 border"
              >
                <div className="mockup-browser-toolbar ">
                  <button className=" input  border-gray-600 border">
                    <a href={web.link}>{web.link}</a>
                  </button>
                </div>
                <figure className="border-base-300 flex justify-center border-t ">
                  <img
                    src={web.image}
                    alt={web.name}
                    className="w-full h-40 md:h-60 object-cover"
                  />
                </figure>
                <div className="p-3 flex flex-col gap-2">
                  <div className="title flex flex-wrap justify-between gap-2 items-center w-full">
                    <strong className="text-lg">
                      <h1 className="font-bold ">{web.title}</h1>
                      <a
                        href={web.repository}
                        className="flex items-center font-semibold justify-start gap-2"
                      >
                        <FaGithub />{" "}
                        <span className="underline">Repository</span>
                      </a>
                    </strong>
                    <strong>{web.build} </strong>
                  </div>
                  <a
                    href={web.link}
                    className="p-3 hover:scale-95 flex justify-center items-center duration-200 transition-all bg-red-600 glass text-slate-200 rounded-md font-bold"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      ),
    },
    {
      title: "Machine learning",
      content: (
        <div className="flex flex-wrap w-full font-reddit-sans  justify-center items-center  gap-3 dark:text-gray-700 mx-auto">
          {machinelearn.map((mclearn, index) => {
            return (
              <article key={index} className="mockup-window bg-base-300 border">
                <figure className="bg-base-200 flex justify-center ">
                  <img
                    src={mclearn.image}
                    alt=""
                    className="w-96 md:w-full md:h-80"
                  />
                </figure>
                <strong className="title p-3 font-bold flex justify-between items-center">
                  {mclearn.title}
                  <span>{mclearn.build}</span>
                </strong>
                <button>
                  <a
                    href={mclearn.repository}
                    className="flex absolute top-3.5 right-4 items-center font-semibold justify-start gap-2"
                  >
                    <FaGithub /> <span className="underline">Repository</span>
                  </a>
                </button>
              </article>
            );
          })}
        </div>
      ),
    },
    {
      title: "Web Apps",
      content: (
        <div className="flex flex-wrap w-full font-reddit-sans  justify-center items-center  gap-3 dark:text-gray-700 mx-auto">
          {webapp.map((apps, index) => {
            return (
              <article
                key={index}
                className="flex-col flex dark:text-slate-200 text-center justify-center items-center"
              >
                <strong className="flex flex-col dark:text-slate-200 text-xl gap-2 justify-center items-center my-3">
                  {apps.title}
                  <span className="bg-slate-200 rounded-md p-2">
                    {apps.build}
                  </span>
                </strong>

                <div className=" border-4 pb-2.5 border-red-500 rounded-xl bg-gray-900">
                  <div className="p-3 relative text-center">
                    <div className="bg-gray-900 h-5 top-2 translate-x-12 absolute flex justify-center items-center w-20 rounded-b-lg">
                      <div className="flex justify-between items-center gap-3">
                        <span className="bg-gray-600 w-10 h-1 rounded-full"></span>
                        <span className="bg-gray-600 w-2 h-2  rounded-full"></span>
                      </div>
                    </div>
                    <img
                      src={apps.image}
                      alt={apps.title}
                      className="w-full h-96 rounded-md"
                    />
                  </div>
                  <button className=" text-sm text-slate-200">
                    <a href={apps.link} className="font-bold">
                      Live Demo
                    </a>
                  </button>
                </div>
                <button className="flex  flex-col gap-3 mt-3 items-center justify-center">
                  <a
                    href={apps.repository}
                    className="flex items-center dark:text-slate-200 text-xl font-semibold justify-start gap-2"
                  >
                    <FaGithub /> <span className="underline">Repository</span>
                  </a>
                </button>
              </article>
            );
          })}
        </div>
      ),
    },
  ];
  return (
    <section
      id="projects"
      className="h-full w-full flex  dark:text-slate-200 justify-center items-center"
    >
      <div className="container p-6 flex flex-col gap-5 justify-center items-center">
        <div className="title flex gap-3 items-center dark:text-slate-200">
          <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
          <h1 className="font-bold text-3xl md:text-4xl font-crete-round">
            Projects
          </h1>
          <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
        </div>
        <p className="text-lg text-center md:text-3xl font-reddit-sans">
          This is some of my projects that I have done and currently working on.
        </p>
        <Tabs tabs={projectTabs} />
        <button className="underline text-xl mt-4 text-gray-700 font-bold dark:text-slate-300 hover:scale-105 duration-200 transition-all">
          <a href="https://github.com/rendy278">
            Visit more for my projects {">>"}
          </a>
        </button>
      </div>
    </section>
  );
};

export default Projects;
