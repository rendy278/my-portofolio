import Education from "../components/Education";
import Title from "../components/Title";
const About = () => {
  return (
    <section
      id="about"
      className="md:h-screen h-full w-full  flex  justify-center items-center   dark:text-slate-200"
    >
      <div className="container gap-5 px-3 sm:px-4 md:px-6  py-5 flex flex-col lg:flex-row justify-between  items-center">
        <article className="left w-full">
          <Title title="About Me" />
          <p className="font-semibold my-3  font-reddit-sans">
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
        </article>
        <Education />
      </div>
    </section>
  );
};

export default About;
