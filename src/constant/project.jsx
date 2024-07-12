import NextTube from "../images/projects/website/NextubeMovie.png";
import LandingpageTs from "../images/projects/website/Agencylandingpage.png";
import Animelist from "../images/projects/website/Animelist.png";
import { FaReact, FaHtml5, FaCss3, FaSass, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const webproject = [
  {
    title: "Nextube Movie",
    image: NextTube,
    build: (
      <p className="flex gap-2 text-lg text-gray-600">
        <FaHtml5 /> <FaCss3 /> <TbBrandTypescript /> <SiTailwindcss />
        <FaReact /> <SiNextdotjs />
      </p>
    ),
    link: "https://nextube-movie.vercel.app/",

    repository: "https://github.com/rendy278/Nextube-Movie.git",
  },
  {
    title: "BlueBash",
    image: LandingpageTs,
    build: (
      <p className="flex gap-2 text-lg text-gray-600">
        <FaHtml5 /> <FaCss3 /> <TbBrandTypescript /> <SiTailwindcss />
        <FaReact />
      </p>
    ),
    link: "https://nextube-movie.vercel.app/",

    repository: "https://github.com/rendy278/Nextube-Movie.git",
  },
  {
    title: "RenAnimelist",
    image: Animelist,
    build: (
      <p className="flex gap-2 text-lg text-gray-600">
        <FaHtml5 /> <FaCss3 /> <IoLogoJavascript /> <SiTailwindcss />
        <FaReact /> <SiNextdotjs />
      </p>
    ),
    link: "https://nextube-movie.vercel.app/",

    repository: "https://github.com/rendy278/Nextube-Movie.git",
  },
];
