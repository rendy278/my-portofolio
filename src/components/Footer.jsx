import { links } from "../constant/links";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex glass text-lg justify-center pb-24 font-crete-round md:pb-0  font-bold  items-center flex-wrap bg-red-600 h-full w-full ">
      <div className="container flex flex-col md:flex-row gap-6 justify-between p-6">
        <div className=" flex flex-wrap  justify-center gap-8 ">
          {links.map((menu, index) => (
            <a
              key={index}
              href={menu.link}
              className=" text-white  hover:text-yellow-400 flex justify-center items-center gap-2 pointer "
            >
              {menu.name}
            </a>
          ))}
        </div>
        <strong className="text-center hover:text-yellow-400 flex justify-center items-center gap-2 cursor-pointer text-white">
          &copy; {currentYear} Rendev. All rights reserved.
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
