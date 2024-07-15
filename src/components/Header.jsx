import { useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaProjectDiagram } from "react-icons/fa";
import Headroom from "react-headroom";
import NightMode from "./NightMode";
import MobileMenu from "./MobileMenu";
import { links } from "../constant/links";

const Navbar = () => {
  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Cek Website Ini",
          text: "Saya menemukan website portofolio yang menarik!",
          url: window.location.href,
        });
        console.log("Share berhasil!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API tidak didukung di browser anda.");
    }
  }, []);

  return (
    <header>
      <Headroom
        style={{ zIndex: 100000 }}
        className="static md:fixed w-full z-[99999]"
      >
        <nav className="navbar text-slate-100 font-reddit-sans justify-centers glass px-4 md:justify-between bg-red-600 shadow-yellow-600 shadow-md">
          <strong className="navbar-start font-bold text-xl">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer font-crete-round"
            >
              <span className="text-yellow-400">{"<"}</span> Rendev{" "}
              <span className="text-yellow-400">{"/>"}</span>
            </ScrollLink>
          </strong>
          <div className="font-bold text-lg hidden md:flex justify-between w-full">
            <ul className="flex justify-center gap-x-4 lg:gap-x-8 items-center w-full">
              {links.map((menu, i) => (
                <li key={i} className="line">
                  <ScrollLink
                    to={menu.link.replace("#", "")}
                    smooth={true}
                    duration={500}
                    className="hover:text-yellow-400 flex justify-center items-center gap-2 cursor-pointer"
                  >
                    <span>{menu.icon}</span>
                    {menu.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end flex gap-3 items-center">
            <NightMode />
            <button
              onClick={handleShare}
              className="flex items-center justify-center p-2 bg-slate-100 text-red-600 dark:text-yellow-200 rounded-lg dark:bg-gray-700"
            >
              <FaProjectDiagram />
            </button>
          </div>
        </nav>
      </Headroom>
      <MobileMenu />
    </header>
  );
};

export default Navbar;
