import Image from "next/image";
import { FaRegHeart, FaShoppingCart, FaUserTie } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineStarOutline, MdStarRate } from "react-icons/md";
import { formatter, ProductType } from "../../../../utilities/extras";
import { Rating } from "react-simple-star-rating";
interface Props {
  product: ProductType;
}
const Product = ({ product }: Props) => {
  return (
    <div className="mt-[1rem]">
      <div className=" bg-[#e2d7bb]">
        <Image src={product?.image} alt={product?.name} height={500} width={500} />
        <div className="hidden flex justify-between -mt-[2rem] bg-white py-2 px-2">
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
        <h1 className="text-center text-xl font-montserrat text-dark-green">{product?.name}</h1>
        <h3 className="text-dark-gold text-2xl text-center py-4 font-dancing">
          {formatter.format(product?.price)}
        </h3>
        <div className="flex justify-center gap-5">
          <Rating
            initialValue={product.averageRating}
            readonly={true}
            size={25}
            allowFraction={true}
            fillColor="#074456"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
