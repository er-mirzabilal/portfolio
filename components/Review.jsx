import React from "react";
import AboutImg from "../public/assets/projects/Frame 45.svg";

import { reviews } from "./data/data";
import ReviewCard from "./ReviewCard";

const Review = (props) => {
  return (
    <div id="Review" className="  flex flex-wrap  ">
      <div className="flex lg:justify-center  my-10">
        <h2 className="text-xl">What Our Partners say about us </h2>
        <div className="h-0.5 lg:w-[433px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-4 lg:mt-10 mb-2 ">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review.review}
            reviewer={review.reviewer}
            src={AboutImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
