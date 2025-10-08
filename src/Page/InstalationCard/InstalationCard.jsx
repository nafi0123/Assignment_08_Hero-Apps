import React from "react";
import { getStoreApp, removeStoreApp } from "../../Utility/Utility";

const InstalationCard = ({ app,handleUninstall }) => {
  console.log(app);
 
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-md">
            <img src={app.image} alt="" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-gray-800">{app.title}</h2>
          <div className="flex items-center text-xs text-gray-500 gap-3 mt-1">
            <span className="flex items-center gap-1 text-green-600">
              ⬇ {(app.downloads / 1000000).toFixed(1)}M
            </span>
            <span className="flex items-center gap-1 text-orange-500">
              ⭐ {app.ratingAvg}
            </span>
            <span>{app.size} MB</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => handleUninstall(app.id)}
        className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-md hover:bg-green-600 transition-all"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalationCard;
