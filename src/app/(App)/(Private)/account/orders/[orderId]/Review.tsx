"use client";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useAddReviewMutation } from "../../../../../../../redux/services/ReviewApiSlice";

interface Props {
  setIsReviewing: any;
  productId: string;
}

const Review = ({ setIsReviewing, productId }: Props) => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = async () => {
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!comment || rating === 0) {
      setErrorMessage("Please provide a comment and a rating.");
      return;
    }

    try {
      const res = await addReview({ product: productId, comment, rating }).unwrap();
      setSuccessMessage(res.message);
      setTimeout(() => {
        setSuccessMessage(null);
        setIsReviewing(false);
      }, 3000);
    } catch (error: any) {
      setErrorMessage(error?.data?.message);
      setTimeout(() => {
        setIsReviewing(false);
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white h-[20rem] w-[80%] lg:w-[40rem] rounded-md shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Add Your Review</h2>

        {/* Display Messages */}
        {successMessage && <div className="text-center text-green-500 mb-4">{successMessage}</div>}
        {errorMessage && <div className="text-center text-red-500 mb-4">{errorMessage}</div>}

        {!successMessage && (
          <>
            {/* Comment Section */}
            <textarea
              className="w-full h-[5rem] border border-gray-300 rounded-md p-2 mb-4"
              placeholder="Give your honest comment on this product"
              value={comment}
              onChange={(e) => setComment(e.target.value)}></textarea>

            {/* Rating Section */}
            <div className="flex justify-center gap-5 mb-4">
              <Rating
                initialValue={rating}
                readonly={false}
                size={25}
                allowFraction={true}
                fillColor="#074456"
                onClick={handleRating}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`${
                  isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                } text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300`}>
                {isLoading ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
