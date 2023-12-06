import Image from "next/image";

interface Props {
  begin: string;
  main: string;
  after: string;
}

const CircledWords = ({ begin, main, after }: Props) => {
  return (
    <h1 className="w-full lg:w-[90%] text-dark-green text-3xl lg:text-6xl font-bold ">
      {begin}
      <span className="relative p-2 ">
        {main}
        <Image
          src={"/circle.svg"}
          alt="circle.svg"
          width={500}
          height={500}
          className="w-[10rem] lg:w-[20rem] xl:w-[25rem] lg:h-[5rem]  absolute top-2 lg:top-2 -left-[0rem]"
        />
      </span>
      {after}
    </h1>
  );
};

export default CircledWords;
