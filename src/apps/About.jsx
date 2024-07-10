import Education from "../components/Education";

const About = () => {
  return (
    <section
      id="about"
      className="md:h-screen h-full w-full  flex flex-col justify-center items-center   dark:text-slate-200"
    >
      <div className="container gap-5 px-3 sm:px-4 md:px-6  py-5 flex flex-col lg:flex-row justify-between  items-center">
        <div className="left w-full">
          <div className="title flex gap-3 items-center">
            <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
            <h1 className="font-bold text-3xl md:text-4xl">About Me :</h1>
          </div>
          <p className="font-semibold my-3  ">
            Pleased to meet you! My name is Rendy, I am currently 20 years old,
            I am a React developer who is enthusiastic about entering the world
            of front-end development. As a passionate learner in this field, I
            am on a journey to master the art of creating engaging and
            responsive user interfaces using React. Driven by curiosity and a
            thirst for knowledge, I explored the dynamic landscape of web
            development and honed my skills in building modern and user-friendly
            interfaces. My journey as a React developer is just beginning, and I
            {"'"}m excited about the endless possibilities for growth and
            innovation in this ever-evolving field. Join me on this learning
            adventure, where every line of code is a step towards creating a
            seamless and visually appealing front-end experience. Let{"'"}s
            start this coding journey together!
          </p>
        </div>
        <Education />
      </div>
    </section>
  );
};

export default About;
