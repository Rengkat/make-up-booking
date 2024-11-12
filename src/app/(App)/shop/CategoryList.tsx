"use client";

import { useEffect, useState } from "react";

type Category = {
  _id: string;
  name: string;
  products: string[];
  __v: number;
};

interface Props {
  setCategory: (id: string) => void;
}

const CategoryList = ({ setCategory }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const res = await fetch("https://make-up-app-backend.onrender.com/api/categories", {
      credentials: "include",
    });
    const data = await res.json();
    setCategories(data.categories || []); // Assumes `categories` is the key in the response
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <ul>
        {categories.map((cat: Category) => (
          <li
            onClick={() => setCategory(cat._id)}
            key={cat._id}
            className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
            {cat.name} ({cat.products.length})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
