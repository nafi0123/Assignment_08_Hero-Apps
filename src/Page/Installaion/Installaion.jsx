import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp, removeStoreApp } from "../../Utility/Utility";
import InstalationCard from "../InstalationCard/InstalationCard";

const Installaion = () => {
  const data = useLoaderData();
  const [appList, setAppList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedAppData = getStoreApp();
    const convertedStore = storedAppData.map((id) => parseInt(id));
    const myAppList = data.filter((card) => convertedStore.includes(card.id));
    setAppList(myAppList);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);
    if (type === "Size") {
      const sortedBySize = [...appList].sort((a, b) => a.size - b.size);
      setAppList(sortedBySize);
    } else if (type === "Rating") {
      const sortedBySize = [...appList].sort(
        (a, b) => a.ratingAvg - b.ratingAvg
      );
      setAppList(sortedBySize);
    } else if (type === "Download") {
      const sortedBySize = [...appList].sort(
        (a, b) => a.downloads - b.downloads
      );
      setAppList(sortedBySize);
    }
  };
  const handleUninstall = (id) => {
    removeStoreApp(id);
    const updatedData = appList.filter((app) => app.id !== id);
    setAppList(updatedData);
  };
  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="border border-dashed border-gray-300 p-5 rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Your Installed Apps
        </h1>
        <p className="text-center text-sm text-gray-500 mt-1">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="border border-dashed border-gray-300 rounded-lg p-5">
        <div className="flex justify-between items-center mb-3">
          <p className="font-semibold text-gray-700 text-sm">
            {appList.length} Apps Found
          </p>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500">Sort By</label>
            <select
              className="border border-gray-300 text-sm rounded-md p-1"
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Size">Size</option>
              <option value="Download">Download</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="space-y-3"></div>
        {appList.map((app) => (
          <InstalationCard
            key={app.id}
            app={app}
            handleUninstall={handleUninstall}
          ></InstalationCard>
        ))}
      </div>
    </div>
  );
};

export default Installaion;
