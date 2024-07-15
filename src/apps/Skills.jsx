import Github from "../components/GithubCalender";
import Tabs from "../components/Tabs";
import Title from "../components/Title";
import { Programing, Framework, Tools } from "../constant/skill";
const Skills = () => {
  const tabs = [
    {
      title: "Programming Languages",
      content: (
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Programing.map((languages, index) => (
              <figure
                key={index}
                className="flex flex-col items-center bg-white text-center dark:bg-slate-100 dark:text-gray-700 rotate-2 border-2 border-slate-400 dark:border-gray-500  shadow-xl rounded-lg p-2 hover:rotate-0 duration-300 transition-all"
              >
                <h1 className="text-lg font-bold mb-4">{languages.title}</h1>
                <img
                  src={languages.images}
                  alt={languages.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <figcaption className="text-lg font-semibold mt-4">
                  {languages.level}
                </figcaption>
              </figure>
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
              <figure
                key={index}
                className="flex flex-col items-center bg-white text-center dark:bg-slate-100 dark:text-gray-700 rotate-2 border-2 border-slate-400 dark:border-gray-500  shadow-xl rounded-lg p-2 hover:rotate-0 duration-300 transition-all"
              >
                <h1 className="text-lg font-bold mb-4">{fm.title}</h1>
                <img
                  src={fm.images}
                  alt={fm.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <figcaption className="text-lg font-semibold mt-4">
                  {fm.level}
                </figcaption>
              </figure>
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
              <figure
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
              </figure>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="md:h-screen  h-full  flex justify-center items-center dark:text-slate-200">
      <div className="w-full px-6 md:px-6 py-5 gap-5 flex flex-col lg:flex-row justify-between items-center">
        <article className="left flex flex-col gap-3 md:gap-6 lg:gap-6 w-full">
          <Title title="Tech Stack" />
          <Tabs tabs={tabs} />
        </article>
        <article className="lg:w-[50%] w-full ">
          <Github />
        </article>
      </div>
    </section>
  );
};

export default Skills;
