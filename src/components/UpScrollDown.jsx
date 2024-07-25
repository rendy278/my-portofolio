import { GoMoveToTop } from "react-icons/go";
import UseScrollHandler from "../hooks/UseScrollBottomHandler";

const UpScrollDown = ({ scroll }) => {
  const { isAtBottom } = UseScrollHandler();

  const handleScrollToTop = () => {
    const scrollAnimation = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollAnimation);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollAnimation();
  };

  return (
    <button
      className={`fixed bottom-24 md:bottom-4 right-4 text-5xl z-10 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-75
        ${scroll ? "flex" : "hidden"} 
        ${isAtBottom ? "bg-red-700 animate-bounce" : "bg-yellow-500"}`}
      onClick={handleScrollToTop}
    >
      <GoMoveToTop className="p-2 text-white" />
    </button>
  );
};

export default UpScrollDown;
