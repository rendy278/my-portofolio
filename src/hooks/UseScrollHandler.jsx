import { useState, useEffect } from "react";

const UseScrollHandler = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.pageYOffset > 0;
      setScrollToTop(isScrolled);

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsAtBottom(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollToTop, isAtBottom };
};

export default UseScrollHandler;
