import React from "react";
import BannerPic from "../../assets/hero.png";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center ">
        <h1 className="text-[#001931] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="text-[#627382] text-base sm:text-lg md:text-xl max-w-3xl mt-6">
          At <span className="font-semibold text-[#632EE3]">HERO.IO</span>, we
          craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="https://play.google.com/store/games?hl=en" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-[#632EE3] transition-all">
            <FaGooglePlay className="text-2xl" />
            Google Play
          </a>
          <a href="https://www.apple.com/app-store/" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-[#9F62F2] transition-all">
            <FaAppStoreIos className="text-2xl" />
            App Store
          </a>
        </div>

        <div className="mt-12 w-full flex justify-center">
          <img
            src={BannerPic}
            alt="App banner"
            className="w-full max-w-4xl object-contain"
          />
        </div>
      </div>

      <div
        className=" py-8 sm:py-12"
        style={{
          background:
            "linear-gradient(125.07deg, rgba(99,46,227,1), rgba(159,98,242,1) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-white">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
                29.6M
              </p>
              <p className="text-gray-200 mt-1 sm:mt-2">Total Downloads</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                21% More Than Last Month
              </p>
            </div>

            <div className="text-white">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">906K</p>
              <p className="text-gray-200 mt-1 sm:mt-2">Total Reviews</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                46% More Than Last Month
              </p>
            </div>

            <div className="text-white">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold">132+</p>
              <p className="text-gray-200 mt-1 sm:mt-2">Active Apps</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                31 More Will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
