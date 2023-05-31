import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import { BsCart } from "react-icons/Bs";

export default function Hero() {
  return (
    <>
      <section className="mt-5 px-1">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto">
            <div className="flex-1">
              <p className="flex mb-10 font-medium text-lg">
                <span className="bg-blue-100 text-blue-700 py-2 px-3 font-semibold rounded-md">
                  Sale 70%
                </span>
              </p>

              <h1 className="font-bold text-5xl sm:text-6xl  text-semibold">
                An Industrial Take on Streetwear
              </h1>
              <h2 className="mt-8 text-base md:text-lg font-normal">
                Anyone can beat you but no one can beat you as long as you wear
                diner outfit.
              </h2>
              {/* <div>
                <button className="flex bg-black text-white p-5 mt-8">
                    
                    <BsCart size={"1.5em"}  /> Start Shopping
                </button>
              </div> */}
              

              <div>
                <button className="flex bg-zinc-900 text-white p-5 mt-8 border-slate-600 border-2">
                  <BsCart size={"1.5em"} style={{ fontWeight: "bold" }} />
                  <span className="ml-2 font-bold">Start Shopping</span>
                </button>
              </div>
              <div className="flex mt-10 space-x-16">
              <Image
                src={"/Featured1.webp"}
                alt={"logo"}
                width={100}
                height={100}
              />
              <Image
                src={"/Featured2.webp"}
                alt={"logo"}
                width={100}
                height={100}
              />
              <Image
                src={"/Featured3.webp"}
                alt={"logo"}
                width={100}
                height={100}
              />
              <Image
                src={"/Featured4.webp"}
                alt={"logo"}
                width={100}
                height={100}
              />
            </div>
            </div>
            <div className="flex-1">
              <Image
                src={"/pichero.jpg"}
                width={750}
                height={750}
                alt="HeroImage"
              />
            </div>
            
          </div>
        </Wrapper>
      </section>
    </>
  );
}