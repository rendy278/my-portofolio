import { FaReact, FaHtml5, FaCss3, FaSass, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { SiCanva, SiTailwindcss, SiJquery, SiNextdotjs } from "react-icons/si";
export const project = [
  {
    title: "Movie",
    name: "Nextube Movie",
    image: "",
    build: (
      <p className="flex gap-2 text-lg text-gray-600">
        <FaHtml5 /> <FaCss3 /> <TbBrandTypescript /> <SiTailwindcss />
        <FaReact /> <SiNextdotjs />
      </p>
    ),
    link: "https://nextube-movie.vercel.app/",
    des: "",
    repository: "https://github.com/rendy278/Nextube-Movie.git",
  },
];
