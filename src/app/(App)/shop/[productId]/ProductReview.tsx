import React from "react";
import { Rating } from "react-simple-star-rating";
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
};
const ProductReview = ({ review }) => {
  console.log(review);
  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex gap-3">
        <div className="bg-dark-green text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
          {getInitials(review?.user?.fullName)}
        </div>
        <div className="mt-3">
          <div className="font-bold">{review?.user?.fullName}</div>
          <div className="flex gap-5">
            <Rating
              initialValue={review?.rating}
              readonly={true}
              size={20}
              allowFraction={true}
              fillColor="#074456"
            />
          </div>
          <p className="text-gray-700">{review?.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
