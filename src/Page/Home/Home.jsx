import React from "react";
import Banner from "../../components/Banner/Banner";
import CardContainer from "../CardContainer/CardContainer";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>

      <div className="max-w-[1200px] mx-auto p-5 md:p-0">
        {/* flex flex-col justify-center items-center */}
        <div className="">
          <h2 className="text-center font-bold text-3xl md:text-4xl">
            Trending Apps
          </h2>
          <p className="text-center mt-1 text-gray-400 text-[14px] md:text-[16px]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 justify-center items-center mt-3 ">
          {data.map((card) => (
            <CardContainer card={card}></CardContainer>
          ))}
        </div>
        <div className="flex justify-center items-center my-3">
          <Link className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white" to="/app">Show All</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
