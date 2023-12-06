interface Props {
  service: Service;
  i: number;
}
interface Service {
  serviceType: string;
  price: string;
  id: number;
  services: string[];
}
const ExecutiveComp = ({ service, i }: Props) => {
  return (
    <div
      className={` py-[2rem] lg:py-[3rem] px-[3rem] lg:px-[6rem] ${
        (i + 1) % 2 === 0 ? "bg-dark-green text-white" : "bg-white"
      } border-[1px] border-slate-400 text-center rounded`}>
      <h1 className="text-4xl py-5">{service.serviceType}</h1>
      <p className="text-xl lg:text-2xl">
        <span className=" text-dark-gold text-4xl">{service.price}</span>/ Session
      </p>
      <ul className="mt-[3rem] lg:mt-[5rem]">
        {service.services.map((serve) => {
          return (
            <li className=" capitalize lg:text-xl my-2" key={serve}>
              {serve}
            </li>
          );
        })}
      </ul>
      <button
        className={`py-4 px-8  mt-[6rem] text-white ${
          (i + 1) % 2 === 0 ? "bg-dark-gold" : "bg-dark-green"
        }`}>
        Book Appointment
      </button>
    </div>
  );
};

export default ExecutiveComp;
