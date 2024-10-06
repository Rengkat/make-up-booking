"use client";
import { useState, useEffect } from "react";

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300); // Default max, to be updated
  const [selectedPrice, setSelectedPrice] = useState([0, 300]);
  console.log(selectedPrice);
  useEffect(() => {
    // Fetch the maximum price from the backend
    const fetchMaxPrice = async () => {
      try {
        // const response = await fetch("/api/products/max-price");
        // const data = await response.json();
        // setMaxPrice(data.maxPrice);
        // setSelectedPrice([0, data.maxPrice]);
      } catch (error) {
        console.error("Error fetching maximum price:", error);
      }
    };

    fetchMaxPrice();
  }, []);

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setSelectedPrice([minPrice, value]);
  };

  return (
    <div className="my-[2rem] bg-white px-[2rem] py-[2.5rem]">
      <input
        type="range"
        min={minPrice}
        max={maxPrice}
        value={selectedPrice[1]}
        onChange={handlePriceChange}
        className="w-full"
      />
      <p className="my-2 text-xl font-light">
        Price: ${selectedPrice[0]} - ${selectedPrice[1]}
      </p>
    </div>
  );
};

export default PriceFilter;
