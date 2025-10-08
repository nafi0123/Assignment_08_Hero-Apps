import React, { useEffect, useState } from "react";

import AppCard from "../AppCard/AppCard";
import logo from "../../assets/logo.png";

const App = () => {
  // const data = useLoaderData();
  // console.log(data, 5555);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/twenty.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      });
  }, []);

  console.log(data,556)
  return (
    <div>
      <div className="max-w-[1200px] mx-auto p-5 md:p-0">
        <div className="text-center mb-6">
          <h2 className="font-bold text-3xl md:text-4xl">
            Our All Applications
          </h2>
          <p className="mt-1 text-gray-400 text-[14px] md:text-[16px]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
          <h3 className="text-lg  text-gray-700 font-bold">
            ({data?.length || 0}) Apps Found
          </h3>

          <div className="w-full md:w-1/3 md:mr-7">
            <label className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                />
              </svg>
              <input
                type="search"
                placeholder="Search apps..."
                className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
            </label>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <img
              src={logo}
              alt="Loading..."
              className="w-20 h-20 animate-spin drop-shadow-lg transition-transform duration-700"
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-3 justify-center items-center">
            {data.map((card) => (
              <AppCard key={card.id} card={card}></AppCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
