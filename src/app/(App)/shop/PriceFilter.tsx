import { useState, useEffect } from "react";
import { formatter } from "../../../../utilities/extras";

interface Props {
  onPriceChange: (priceRange: number[]) => void;
  highestPrice: number;
  lowestPrice: number;
}

const PriceFilter = ({ onPriceChange, highestPrice, lowestPrice }: Props) => {
  const [minPrice, setMinPrice] = useState(lowestPrice);
  const [maxPrice, setMaxPrice] = useState(highestPrice);
  const [selectedPrice, setSelectedPrice] = useState([lowestPrice, highestPrice]);

  useEffect(() => {
    setMinPrice(lowestPrice);
    setMaxPrice(highestPrice);
    setSelectedPrice([lowestPrice, highestPrice]);
  }, [lowestPrice, highestPrice]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSelectedPrice([minPrice, value]);
    onPriceChange([minPrice, value]);
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
        Price: {formatter.format(selectedPrice[0])} - {formatter.format(selectedPrice[1])}
      </p>
    </div>
  );
};

export default PriceFilter;
