"use client";
import { useGetUserDetailsQuery } from "../../../../../redux/services/UserApiSlice";
interface Props {
  onAddressChange: (address: string) => void;
  onAdditionalInfoChange: (info: string) => void;
}

const Details = ({ onAddressChange, onAdditionalInfoChange }: Props) => {
  const { data, error, isSuccess } = useGetUserDetailsQuery({});
  // console.log(data);
  return (
    <div>
      <div className="checkout-input">{data?.user.firstName}</div>
      <div className="checkout-input">{data?.user.surname}</div>
      <select
        onChange={(e) => {
          onAddressChange(e.target.value);
        }}
        className="checkout-input"
        name="address"
        id="">
        <option value="" disabled selected>
          Select an address
        </option>
        {data?.user?.addresses?.map((address: any) => (
          <option key={address._id} value={address._id}>
            {address.homeAddress}, {address.town}, {address.state}, {address.country}
          </option>
        ))}
      </select>
      <div className="checkout-input">{data?.user.email}</div>

      <h2 className="text-dark-green font-normal text-xl lg:text-2xl py-5">
        Additional Information
      </h2>
      <textarea
        onChange={(e) => onAdditionalInfoChange(e.target.value)}
        className="checkout-input h-[20vh]"
        name="moreDetail"
        id=""
        placeholder="Please add any information for your delivery"></textarea>
    </div>
  );
};

export default Details;
