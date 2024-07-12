import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "../hooks/ThemeContext";

const NightMode = () => {
  const { isNightMode, toggleNightMode } = useTheme();
  return (
    <div className="flex items-center justify-center">
      <button
        className="text-lg dark:text-white text-gray-700 rounded-md focus:outline-none"
        onClick={toggleNightMode}
      >
        <div className="relative w-16 h-8 bg-slate-200 dark:bg-slate-400 rounded-full">
          <input
            type="checkbox"
            className="opacity-0 w-0 h-0"
            checked={isNightMode}
            onChange={toggleNightMode}
          />
          <div
            className={`toggle-dot text-base absolute p-2 bg-white dark:bg-gray-600 rounded-full shadow-md top-0 transition-transform duration-300 ${
              isNightMode
                ? "transform translate-x-[100%]"
                : "transform translate-x-0"
            }`}
          >
            {isNightMode ? (
              <BsMoonStars className="text-yellow-300" />
            ) : (
              <BsSun className="text-yellow-500" />
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default NightMode;
