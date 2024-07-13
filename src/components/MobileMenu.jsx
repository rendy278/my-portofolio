import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { links } from "../constant/links";
import UpScrollDown from "./UpScrollDown";

const MobileMenu = () => {
  const [active, setActive] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <UpScrollDown />
      <div
        className={`lg:hidden md:hidden opacity-0 duration-200 transition-all navbar pb-1.5 z-50 justify-center left-0 right-0 fixed bottom-0 rounded-t-xl bg-red-500 ${
          scroll ? "opacity-100" : ""
        }`}
      >
        <ul className="flex font-crete-round mr-[3.5px] relative">
          <span
            className={` bg-yellow-500 duration-500 ${links[active].dis} border-4 border-slate-200 h-16 w-16 absolute -top-4 rounded-full`}
          ></span>
          {links.map((menu, i) => (
            <li
              key={i}
              className="w-[4.9rem] flex mx-auto justify-center items-center"
            >
              <ScrollLink
                to={menu.link.replace("#", "")}
                smooth={true}
                duration={500}
                className="flex flex-col font-semibold text-slate-100 justify-center items-center text-wrap pt-6 cursor-pointer"
                onClick={() => setActive(i)}
              >
                <span
                  className={`flex justify-center font-bold items-center cursor-pointer z-50 duration-500 ${
                    i === active ? "-mt-10 text-white" : ""
                  }`}
                >
                  <p>{menu.icon}</p>
                </span>
                <span
                  className={`${
                    active === i
                      ? "translate-y-6 text-wrap opacity-100 duration-700"
                      : "translate-y-10 opacity-0 text-center"
                  }`}
                >
                  {menu.name}
                </span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
