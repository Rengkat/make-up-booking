import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-lighter-gold">
      <div>
        <Image src={"/notFound.svg"} alt="not found" width={500} height={500} />
        <div className="flex items-center justify-center">
          <Link href={"/"} className="py-4 px-8 bg-dark-green text-white hover:bg-dark-gold">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
