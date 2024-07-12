import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { exptimeline } from "../constant/timeline";
import { certificates } from "../constant/certificates";

const Experience = () => {
  return (
    <section className="md:h-screen h-full w-full flex justify-center items-center">
      <div className="container gap-6 px-3 sm:px-4 md:px-6 py-5 flex flex-col lg:flex-row justify-between items-center">
        <div className="left w-full">
          <div className="title flex gap-3 items-center dark:text-slate-200">
            <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
            <h1 className="font-bold text-3xl md:text-4xl">Certificates :</h1>
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-60   md:w-96 mt-8"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="card  card-compact bg-base-100 shadow-xl">
                  <figure>
                    <img src={cert.image} alt={cert.title} className="w-full" />
                  </figure>
                  <div className="card-body rounded-b-xl bg-slate-200 ">
                    <h2 className="text-sm md:text-lg font-bold">
                      {cert.title}
                    </h2>
                    <p className="text-xs md:text-sm"> {cert.des}</p>
                    <div className="card-actions justify-end">
                      <button className="p-2 bg-red-500 font-bold text-white rounded-md">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="right text-lg md:text-xl">
          <div className="title flex gap-3 items-center dark:text-slate-200">
            <div className="border-b h-3 w-12 border-black dark:border-slate-200"></div>
            <h1 className="font-bold text-3xl md:text-4xl">Experience :</h1>
          </div>
          {exptimeline.map((item, index) => (
            <div key={index} className="flex  dark:text-slate-200">
              <div className="mt-5">
                <div className="flex justify-center items-center text-white rounded-full w-16 h-16 md:w-20 md:h-20 bg-slate-200 border-2 md:border-4 border-red-500">
                  <h1 className="text-gray-700">{item.icon}</h1>
                </div>
                {index < exptimeline.length - 1 ? (
                  <div className="w-1 bg-slate-600 m-auto h-full"></div>
                ) : (
                  <div className="h-16"></div>
                )}
              </div>
              <div className="flex flex-col justify-start h-max mt-5 px-6">
                <h1 className="font-bold gap-0 flex flex-col uppercase justify-between w-full">
                  {item.title}
                  <time className="text-red-500 flex items-center gap-1  font-bold">
                    {item.result}
                  </time>
                </h1>
                <strong className="text-yellow-600 dark:text-yellow-500 font-bold">
                  {item.position}
                </strong>
                <p>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
