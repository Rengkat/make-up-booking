import React, { Fragment } from "react";
import CircledWords from "../../../../components/CircledWords";
import { executiveMassage, makeups } from "../../../../../utilities/extras";
import PricingComp from "../pricingComp";
import ExecutiveComp from "../executiveComp";

const Makeups = () => {
  return (
    <div className="pt-5">
      <h1 className="text-2xl lg:text-4xl text-dark-green font-light text-center">
        Fullbeauty Makeup Pricing
      </h1>
      <section className=" lg:w-[65%] mx-auto px-5 py-[1rem] lg:py-[5rem]">
        {makeups.map((service) => {
          return (
            <Fragment key={service.id}>
              <PricingComp service={service} />
            </Fragment>
          );
        })}
      </section>
      <section className="py-[5rem]">
        <div className="text-center text-3xl lg:text-5xl text-dark-green font-bold my-[3rem] lg:my-[5rem]">
          <h1>Our Makeups Executive Plans</h1>
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-5 px-[1rem] lg:px-[3rem]">
          {executiveMassage.map((service, i) => {
            return (
              <Fragment key={service.id}>
                <ExecutiveComp service={service} i={i} />
              </Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Makeups;
