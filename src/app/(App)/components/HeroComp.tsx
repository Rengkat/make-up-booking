const HeroComp = ({ title }: { title: string }) => {
  return (
    <div className="h-[30vh] lg:h-[45vh] bg-white flex items-center justify-center">
      <h1 className=" text-[3rem] lg:text-[5rem] font-dancing text-dark-green">{title}</h1>
    </div>
  );
};

export default HeroComp;
