import Github from "../components/GithubCalender";
import Tabs from "../components/Tabs";
import { Programing, Framework, Tools } from "../constant/skill";
const Skills = () => {
  const tabs = [
    {
      title: "Programming Languages",
      content: (
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Programing.map((languages, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white text-center dark:bg-slate-100 dark:text-gray-700 rotate-2 border-2 border-slate-400 dark:border-gray-500  shadow-xl rounded-lg p-2 hover:rotate-0 duration-300 transition-all"
              >
                <h1 className="text-lg font-bold mb-4">{languages.title}</h1>
                <img
                  src={languages.images}
                  alt={languages.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <h1 className="text-lg font-semibold mt-4">
                  {languages.level}
                </h1>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Framework",
      content: (
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Framework.map((fm, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white text-center dark:bg-slate-100 dark:text-gray-700 rotate-2 border-2 border-slate-400 dark:border-gray-500  shadow-xl rounded-lg p-2 hover:rotate-0 duration-300 transition-all"
              >
                <h1 className="text-lg font-bold mb-4">{fm.title}</h1>
                <img
                  src={fm.images}
                  alt={fm.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <h1 className="text-lg font-semibold mt-4">{fm.level}</h1>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Tools",
      content: (
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white dark:bg-slate-100 dark:text-gray-700  shadow-xl rotate-2 border-2 border-slate-400 dark:border-gray-500 rounded-lg p-4 hover:rotate-0 duration-300 transition-all"
              >
                <h1 className="text-lg font-bold ">{tool.title}</h1>
                <div className="py-3">
                  <img
                    src={tool.images}
                    alt={tool.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="md:h-screen  h-full  flex justify-center items-center dark:text-slate-200">
      <div className="w-full px-6 md:px-6 py-5 gap-5 flex flex-col lg:flex-row justify-between items-center">
        <div className="left flex flex-col gap-3 md:gap-6 lg:gap-6 w-full">
          <div className="title flex gap-3 items-center">
            <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
            <h1 className="font-bold text-3xl md:text-4xl">Tech Stack :</h1>
          </div>
          <Tabs tabs={tabs} />
        </div>
        <div className="lg:w-[50%] w-full">
          <Github />
          <div className="mt-2 md:mt-8 lg:mt-3">
            <div className="title flex gap-3 items-center">
              <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
              <h1 className="font-bold text-3xl md:text-4xl">Hobby :</h1>
            </div>
            <ul className="timeline overflow-auto dark:text-[#537FE7]">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Drawing Arts</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Playing Game</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Coding</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Grapich Design</div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
