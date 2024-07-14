import { links } from "../constant/links";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex glass text-lg justify-center pb-24 font-crete-round md:pb-0  font-bold  items-center flex-wrap bg-red-600 h-full w-full ">
      <div className="container flex flex-col gap-6 justify-between p-6">
        <div className=" flex  justify-center gap-8 ">
          {links.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.link}`}
              className=" text-white  hover:text-yellow-400 flex justify-center items-center gap-2 cursor-pointer "
            >
              {menu.name}
            </a>
          ))}
        </div>
        <div className="text-center hover:text-yellow-400 flex justify-center items-center gap-2 cursor-pointer text-white">
          &copy; {currentYear} Rendev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
