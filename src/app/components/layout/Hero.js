import Image from "next/image";
import Right from "./icons/Right";

const Hero = () => {
  return (
    <section className='grid grid-cols-2'>
      <div>
        <h1 className="text-4xl font-semibold">Everything is better with a Pizza</h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete ,a simple yet
          deliciouse joy in life
        </p>
        <div className="flex gap-4">
            <button className="bg-primary  text-white px-8 py-2 rounded-full">
                Order Now
                <Right/>
            </button> 
            <button>learn More</button>
        </div>
      </div>
      <div className="'w-16 h-16 relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt="Pizza"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
