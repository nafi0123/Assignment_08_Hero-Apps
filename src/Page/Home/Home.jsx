import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import CardContainer from "../CardContainer/CardContainer";
import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Home = () => {
  

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/eight.json")
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        setLoading(false);
      });
  }, []);

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

        

        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <img
              src={logo}
              alt="Loading..."
              className="w-20 h-20 animate-spin drop-shadow-lg transition-transform duration-700"
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-4 justify-center items-center mt-3">
            {data.map((card) => (
              <CardContainer key={card.id} card={card} />
            ))}
          </div>
        )}

        <div className="flex justify-center items-center my-3">
          <Link
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
            to="/app"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
