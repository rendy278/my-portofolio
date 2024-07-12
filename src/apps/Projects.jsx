import Tabs from "../components/Tabs";
import { webproject } from "../constant/project";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const projectTabs = [
    {
      title: "Website",
      content: (
        <div className="flex flex-wrap w-full  justify-center items-center  gap-3 dark:text-gray-700 mx-auto">
          {webproject.map((web, index) => {
            return (
              <div
                key={index}
                className="mockup-browser w-72 sm:w-80 md:w-96 bg-slate-200 dark:border-slate-300 shadow-md shadow-zinc-400 border-gray-600 border"
              >
                <div className="mockup-browser-toolbar ">
                  <div className="input  border-gray-600 border">
                    <a href={web.link}>{web.link}</a>
                  </div>
                </div>
                <div className="border-base-300 flex justify-center border-t ">
                  <img
                    src={web.image}
                    alt={web.name}
                    className="w-full h-40 md:h-60 object-cover"
                  />
                </div>
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
                  <button className="p-3 hover:scale-95 duration-200 transition-all bg-red-600 glass text-slate-200 rounded-md font-bold">
                    View More Information
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      title: "Games",
    },
    {
      title: "Machine learning",
    },
    {
      title: "Web Apps",
    },
  ];
  return (
    <section
      id="projects"
      className="h-full w-full flex pb-20 md:pb-0 dark:text-slate-200 justify-center items-center"
    >
      <div className="container p-6 flex flex-col gap-5 justify-center items-center">
        <div className="title flex gap-3 items-center dark:text-slate-200">
          <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
          <h1 className="font-bold text-3xl md:text-4xl">Projects :</h1>
          <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
        </div>
        <p className="text-lg text-center md:text-3xl">
          This is some of my projects that I have done and currently working on.
        </p>
        <Tabs tabs={projectTabs} />
        <button className="underline text-lg text-red-500 font-bold dark:text-slate-300 hover:scale-105 duration-200 transition-all">
          <a href="">Visit more for my projects {">>"}</a>
        </button>
      </div>
    </section>
  );
};

export default Projects;
