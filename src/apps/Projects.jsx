import Tabs from "../components/Tabs";

const Projects = () => {
  const projectTabs = [
    {
      title: "Website",
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
    <section className="h-full pb-20 md:h-screen flex dark:text-slate-200 justify-center items-center">
      <div className="container p-6 flex flex-col gap-5 justify-start items-start">
        <div className="title flex gap-3 items-center dark:text-slate-200">
          <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
          <h1 className="font-bold text-3xl md:text-4xl">Projects :</h1>
        </div>
        <p className="text-2xl md:text-3xl">
          This is some of my projects that I have done and currently working on.
        </p>
        <Tabs tabs={projectTabs} />
        <button className="underline text-lg text-[#537FE7] font-bold dark:text-slate-300 hover:scale-105 duration-200 transition-all">
          <a href="">Visit more for my projects {">>"}</a>
        </button>
      </div>
    </section>
  );
};

export default Projects;
