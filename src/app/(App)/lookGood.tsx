import Image from "next/image";

const LookGood = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[5rem] bg-lighter-gold w-full py-[3rem] lg:py-[8rem] px-[1rem] lg:px-[5rem]">
      <aside className="w-full lg:w-[43%]">
        <div className="text-4xl lg:text-7xl text-dark-green">
          <h1>Look Good </h1>
          <h1 className=" translate-x-[6rem]">Feel Good</h1>
        </div>
        <div className="my-[5rem]">
          <h3 className="text-[22px] text-dark-green my-5 ">About Fullbeauty</h3>
          <p className="lg:text-[18px] text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nesciunt? Harum iusto
            explicabo quod et soluta doloremque provident repellendus similique?
          </p>
          <button className="text-dark-green border-0 border-b-2 border-dark-green text-[19px] mt-10 ">
            Know More
          </button>
        </div>
      </aside>
      <aside className=" xl:w-[57%]">
        <Image
          src={"/dis-image.webp"}
          alt="Intro image"
          height={500}
          width={500}
          className=" h-[100%] w-[100%] mx-auto mt-5 object-cover"
        />
      </aside>
    </div>
  );
};

export default LookGood;
