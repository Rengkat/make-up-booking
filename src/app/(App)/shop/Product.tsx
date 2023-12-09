import Image from "next/image";
import { FaRegHeart, FaShoppingCart, FaUserTie } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineStarOutline, MdStarRate } from "react-icons/md";

const Product = () => {
  return (
    <div className="mt-[1rem]">
      <div className=" bg-[#e2d7bb]">
        <Image src={"/image.png"} alt="product" height={500} width={500} />
        <div className="hidden flex justify-between -mt-[2rem] bg-white py-2">
          <aside className="link-icons">
            <FaShoppingCart className="text-xl cursor-pointer" />
          </aside>
          <aside className="link-icons">
            <MdOutlineRemoveRedEye className="text-xl cursor-pointer" />
          </aside>
          <aside className="link-icons">
            <FaRegHeart className="text-xl cursor-pointer" />
          </aside>
        </div>
      </div>
      <div className=" p-5">
        <h1 className="text-center text-2xl font-montserrat text-dark-green">
          Allora Beauty Blender
        </h1>
        <h3 className="text-dark-gold text-2xl text-center py-4 font-dancing">$120</h3>
        <div className="flex justify-center gap-5">
          <MdOutlineStarOutline className="text-dark-green text-xl" />
          <MdOutlineStarOutline className="text-dark-green text-xl" />
          <MdOutlineStarOutline className="text-dark-green text-xl" />
          <MdOutlineStarOutline className="text-dark-green text-xl" />
          <MdOutlineStarOutline className="text-dark-green text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Product;
