import React from "react";

const NewsLetter = () => {
  return (
    <section className="contact py-[8rem] px-3 lg:px-5 my-[5rem] bg-white">
      <div className="flex lg:justify-end">
        <div className="w-full lg:w-1/2 bg-dark-gold px-5 lg:px-[5rem] py-[7rem] lg:py-[10rem]">
          <h1 className="text-2xl lg:text-4xl font-normal">
            Stay Up To Date With The Latest News & Offers!
          </h1>
          <p className="my-[3rem] text-xl lg:text-2xl"> Our Newsletter is sent once a week.</p>
          <div className="w-full flex gap-5">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full border-0 border-b-2 border-white bg-transparent placeholder:text-white placeholder:lg:text-xl"
            />
            <button className="bg-dark-green text-white py-2 lg:py-4 px-5 lg:px-8">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
