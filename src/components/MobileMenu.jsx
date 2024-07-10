import { links } from "../constant/links";
import { useState } from "react";
const MobileMenu = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="lg:hidden md:hidden navbar pb-1.5 z-50 justify-center left-0 right-0 fixed bottom-0 rounded-t-xl bg-[#537FE7]">
      <ul className="flex mr-[3.5px] relative">
        <span
          className={`bg-gray-700 duration-500 ${links[active].dis} border-4 border-white h-16 w-16 absolute -top-4 rounded-full`}
        ></span>
        {links.map((menu, i) => (
          <li
            key={i}
            className="w-[4.9rem] flex mx-auto justify-center items-center"
          >
            <a
              className="flex flex-col font-semibold text-[#E9F8F9] justify-center items-center text-wrap pt-6"
              onClick={() => setActive(i)}
              href={menu.link}
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
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
