import React from "react";

const DetailsHeader = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <div className="flex justify-start gap-5 mt-5 overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`w-full text-center hover:bg-gray-400 duration-300 rounded-full cursor-pointer pb-2 ${
            activeTab === tab
              ? "text-blue-500 border-b-2 border-blue-500 font-semibold rounded-none"
              : "text-gray-600"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default DetailsHeader;
