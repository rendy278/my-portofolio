import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col font-crete-round">
      <div className="flex flex-wrap justify-center mx-auto gap-3   rounded-xl">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "bg-red-500 pointer text-white transition-all duration-500 font-bold rounded-xl"
                : "text-gray-700 pointer bg-slate-300 dark:text-slate-200 dark:bg-gray-600 font-bold rounded-xl"
            } py-4 px-6 block border-b-2 border-transparent font-medium`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-3">
        {tabs.map((tab, index) => (
          <article
            key={index}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            {tab.content}
          </article>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Tabs;
