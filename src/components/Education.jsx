import { edutimeline } from "../constant/timeline";
import { MdOutlineDateRange } from "react-icons/md";
import Title from "./Title";
function Timeline() {
  return (
    <div className="text-lg md:text-xl">
      <Title title="Education" />
      {edutimeline.map((item, index) => (
        <article key={"W" + index} className="flex">
          <div className="mt-5">
            <figure className="flex justify-center items-center text-white rounded-full w-16 h-16 md:w-20 md:h-20 bg-slate-200 border-2 md:border-4 border-red-500">
              <img
                src={item.images}
                className="w-10 h-10 md:w-12 h:h-12"
                alt={item.title}
              />
            </figure>
            {index < edutimeline.length - 1 ? (
              <div className=" w-1 bg-slate-600 m-auto h-full"></div>
            ) : (
              <div className="h-16"></div>
            )}
          </div>
          <div className="flex flex-col justify-start h-max mt-5 px-6 ">
            <h1 className="font-bold gap-0 font-crete-round flex flex-col md:flex-row justify-between  w-full">
              {item.title}
              <time className="text-red-500 font-reddit-sans flex items-center gap-1  font-bold">
                <MdOutlineDateRange /> {item.result}
              </time>
            </h1>
            <strong className="text-yellow-600 font-crete-round dark:text-yellow-500  font-bold">
              {item.subTitle}
            </strong>
            <p className=" font-reddit-sans">{item.des}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Timeline;
