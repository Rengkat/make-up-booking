interface Props {
  service: Service;
}
interface Service {
  service: string;
  price: string;
  sub?: string;
  id: number;
}
const PricingComp = ({ service }: Props) => {
  return (
    <div>
      <div className="my-3 lg:my-5 border-[1px] p-3 lg:p-5 shadow rounded ">
        <div className="flex justify-between ">
          <p className=" text-dark-green text-xl lg:text-2xl capitalize">{service?.service}</p>
          <p className="text-dark-green text-xl lg:text-2xl">{service?.price}</p>
        </div>
        <p className="text-[18px] my-2 text-slate-500">{service?.sub}</p>
      </div>
    </div>
  );
};

export default PricingComp;
