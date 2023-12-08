import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div>
      <div className=" bg-[#e2d7bb]">
        <Image src={"/image.png"} alt="product" height={500} width={500} />
        <div></div>
      </div>
      <div>
        <h1>Allora Beauty Blender</h1>
        <h3>$120 $90</h3>
      </div>
    </div>
  );
};

export default Product;
