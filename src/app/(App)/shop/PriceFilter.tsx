"use client";
import React, { useState, useEffect } from "react";

interface Props {
  onPriceChange: (priceRange: number[]) => void;
}

const PriceFilter = ({ onPriceChange }: Props) => {
  const priceRanges = [
    { label: "Below ₦2,000", min: 0, max: 2000 },
    { label: "₦2,000 to ₦5,000", min: 2000, max: 5000 },
    { label: "₦5,000 to ₦10,000", min: 5000, max: 10000 },
    { label: "₦10,000 to ₦20,000", min: 10000, max: 20000 },
    { label: "₦20,000 to ₦50,000", min: 20000, max: 50000 },
    { label: "₦50,000 to ₦100,000", min: 50000, max: 100000 },
  ];

  const [selectedRange, setSelectedRange] = useState<string | null>(null);

  useEffect(() => {
    // Initially, show all products
    onPriceChange([0, 100000]);
  }, [onPriceChange]);

  const handleCheckboxChange = (range: { min: number; max: number; label: string }) => {
    const newRange = selectedRange === range.label ? null : range.label; // Toggle selection
    setSelectedRange(newRange);
    onPriceChange(newRange ? [range.min, range.max] : [0, 100000]); // Reset to all products if deselected
  };

  return (
    <div className="my-[2rem] bg-white px-[2rem] py-[2.5rem]">
      {priceRanges.map((range) => (
        <div key={range.label} className="flex gap-5 items-center">
          <input
            type="checkbox"
            checked={selectedRange === range.label}
            onChange={() => handleCheckboxChange(range)}
          />
          <span>{range.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PriceFilter;
