import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import appError from "../../assets/App-Error.png";
import { Link } from "react-router";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addToStoreApp, cheackBtn } from "../../Utility/Utility";

const AppDeatails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const app = data.find((item) => item.id === parseInt(id));
  const navigate=useNavigate()
  if (!app) {
    return (
      <div className="flex flex-col justify-center items-center my-2 text-center p-5 md:p-0">
        <div>
          <img src={appError} alt="" />
        </div>
        <h4 className="text-[25px] md:text-[48px] font-bold">
          Oops, page not found!
        </h4>
        <p className="text=[17px] md:text-[20px]">
          The page you are looking for is not available.
        </p>
        <a
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
          onClick={() => navigate(-1)}
        >
          Go back
        </a>
      </div>
    );
  }

  const [install, setInstall] = useState(true);

  useEffect(() => {
    if (app) {
      const installed = cheackBtn(parseInt(app.id));
      setInstall(installed);
    }
  }, [app]);
  const handleClicked = (id) => {
    addToStoreApp(parseInt(id));
    setInstall(true);
  };

  return (
    <div className="max-w-[1200px] mx-auto p-5 md:p-0 my-3.5">
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col md:flex-row items-center md:items-start mt-10 gap-6">
        <div className="flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl mx-auto md:mx-0"
          />
        </div>

        <div className="flex-grow text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800">{app.title}</h1>
          <p className="text-sm text-gray-600 mt-1">
            Developed by{" "}
            <span className="text-purple-600 font-medium">
              {app.companyName}
            </span>
          </p>

          <p className="text-gray-600 text-sm mt-3">{app.description}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 mb-4">
            <div className="text-center">
              <div className="text-3xl text-green-500 mb-1">⬇️</div>
              <p className="text-sm text-gray-500">Downloads</p>
              <p className="text-xl font-bold text-gray-800">
                {(app.downloads / 1000000).toFixed(1)}M
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl text-yellow-500 mb-1">⭐</div>
              <p className="text-sm text-gray-500">Average Ratings</p>
              <p className="text-xl font-bold text-gray-800">{app.ratingAvg}</p>
            </div>

            <div className="text-center">
              <div className="text-3xl text-purple-600 mb-1">💬</div>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <p className="text-xl font-bold text-gray-800">{app.reviews}</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => handleClicked(app.id)}
              className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition-all"
            >
              {install ? "Installed" : `Install Now ${app.size} MB`}
              {/* Install Now ({app.size} MB) */}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-[#001931] text-[24px] font-semibold mt-2 ">
          Ratings
        </h3>

        <div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              layout="vertical"
              data={[...app.ratings].reverse()}
              margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
            >
              <XAxis type="number"></XAxis>
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 14, fill: "#555" }}
              />
              <Tooltip></Tooltip>
              <Bar dataKey="count" fill="#f97316" barSize={20} radius={4}></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-[#001931] text-[24px] font-semibold mt-2 ">
            Description
          </h3>
          <p className="text-center mt-1 text-[#627382] text-[14px] md:text-[16px] text-justify">
            {app.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDeatails;
