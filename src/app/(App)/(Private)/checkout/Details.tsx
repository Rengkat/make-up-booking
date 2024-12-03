"use client";
import { useGetUserDetailsQuery } from "../../../../../redux/services/UserApiSlice";

const Details = () => {
  const { data, error, isSuccess } = useGetUserDetailsQuery({});
  // console.log(data);
  return (
    <div>
      <div className="checkout-input">{data?.user.firstName}</div>
      <div className="checkout-input">{data?.user.surname}</div>
      <select className="checkout-input" name="address" id="">
        {data?.user?.addresses?.map((address: any) => (
          <option value={address._id}>
            {address.homeAddress} {address.state}, {address.country}
          </option>
        ))}
      </select>
      <div className="checkout-input">{data?.user.email}</div>

      <h2 className="text-dark-green font-normal text-xl lg:text-2xl py-5">
        Additional Information
      </h2>
      <textarea
        className="checkout-input h-[20vh]"
        name="moreDetail"
        id=""
        placeholder="Please add any information for your delivery"></textarea>
    </div>
  );
};

export default Details;
