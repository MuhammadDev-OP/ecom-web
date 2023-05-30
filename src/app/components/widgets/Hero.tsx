import Wrapper from "../shared/Wrapper";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="">
        <Wrapper>
          <div className="flex items-center max-w-screen-xl mx-auto">
            <div className="flex-1">
              <p className="text-blue-500">Sale 70%</p>

              <h1 className="font-bold text-6xl text-semibold bg-lime-200">
                An Industrial Take on StreetWater
              </h1>
              <h2>
                Anyone can beat you but no one can beat you as long as you wear
                diner outfit.
              </h2>
            </div>
            <div className="flex-1">
              <Image src={"/pichero.jpg"} width={700} height={700} alt="HeroImage" />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
