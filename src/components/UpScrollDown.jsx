import { GoMoveToTop } from "react-icons/go";
import UseScrollHandler from "../hooks/UseScrollHandler";

const UpScrollDown = () => {
  const { scrollToTop, isAtBottom } = UseScrollHandler();

  const handleScrollToTop = () => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  };

  return (
    <button
      className={`fixed bottom-24 md:bottom-4  right-4 text-5xl z-10 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-75 ${
        scrollToTop ? "bg-orange-600" : "hidden"
      } ${isAtBottom ? "bg-red-700 animate-bounce " : ""}`}
      onClick={handleScrollToTop}
    >
      <GoMoveToTop className="p-2 text-white" />
    </button>
  );
};

export default UpScrollDown;
