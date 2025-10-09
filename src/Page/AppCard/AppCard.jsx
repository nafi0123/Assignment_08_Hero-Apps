import React from "react";
import { FaDownload } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router";

const AppCard = ({ card }) => {
  return (
    <Link to={`/appdeatails/${card.id}`}>
      <div
        className="border border-gray-300 p-4 w-64 rounded-lg shadow-sm bg-white 
                         hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 ease-in-out flex flex-col justify-between"
      >
        <div>
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto rounded-md"
          />
        </div>

        <p className="mt-3 font-semibold text-lg text-gray-800">{card.title}</p>

        {card.description && (
          <p className="text-gray-500 text-sm mt-1 line-clamp-2">
            {card.description}
          </p>
        )}

        <div className="flex justify-between items-center mt-4 text-gray-700">
          <div className="flex items-center gap-2">
            <FaDownload className="text-blue-500" />
            <span className="text-sm">{(card.downloads / 1000000).toFixed(1)}M</span>
          </div>

          <div className="flex items-center gap-2">
            <FcRating />
            <span className="text-sm">{card.ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
