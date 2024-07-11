import { edutimeline } from "../constant/timeline";
import { MdOutlineDateRange } from "react-icons/md";
function Timeline() {
  return (
    <div className="text-lg md:text-xl">
      <div className="title flex gap-3 items-center">
        <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
        <h1 className="font-bold text-3xl md:text-4xl">Education :</h1>
      </div>
      {edutimeline.map((item, index) => (
        <div key={"W" + index} className="flex">
          <div className="mt-5">
            <div className="flex justify-center items-center text-white rounded-full w-16 h-16 md:w-20 md:h-20 bg-slate-200 border-2 md:border-4 border-blue-500">
              <img src={item.images} className="w-10 h-10" alt="" />
            </div>
            {index < edutimeline.length - 1 ? (
              <div className=" w-1 bg-slate-600 m-auto h-full"></div>
            ) : (
              <div className="h-16"></div>
            )}
          </div>
          <div className="flex flex-col justify-start h-max mt-5 px-6 ">
            <h1 className="font-bold gap-0 flex flex-col md:flex-row justify-between  w-full">
              {item.title}
              <time className="text-[#537FE7] flex items-center gap-1 dark:text-blue-400 font-bold">
                <MdOutlineDateRange /> {item.result}
              </time>
            </h1>
            <strong className="text-blue-400 dark:text-[#C0EEF2] font-bold">
              {item.subTitle}
            </strong>
            <p>{item.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
