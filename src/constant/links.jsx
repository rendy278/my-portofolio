import { IoHomeSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";

export const links = [
  {
    name: "Home",
    link: "home",
    dis: "translate-x-[8px]",
    icon: <IoHomeSharp size={25} />,
  },
  {
    name: "About",
    link: "about",
    dis: "translate-x-[86px]",
    icon: <BsFillPersonFill size={25} />,
  },
  {
    name: "Projects",
    link: "projects",
    dis: "translate-x-[165px]",
    icon: <AiFillProject size={25} />,
  },
  {
    name: "Contact",
    link: "contact",
    dis: "translate-x-[244px]",
    icon: <RiContactsFill size={25} />,
  },
];
