import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const Featured = () => {
  return (
    <Wrapper>
      <div className="max-w-screen-xl mx-auto mt-10">
        <div className="text-center mt-5 mb-20">
          <p className="text-blue-700 font-semibold">PROMOTIONS</p>
          <h1 className="text-3xl mb-4 font-bold first:mt-0 text-center">
            Our Promotions Event
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 w-full">
          <div className="sm:col-span-2 space-y-2">
            <div className=" bg-[#d6d6d8]  flex justify-center items-center px-5">
              <div>
                <h4>
                  GET UP TO <span className="text-2xl">60%</span>
                </h4>
                <p>For the summer season</p>
              </div>
              <Image
                src={"/promotions_image/14.png"}
                alt=""
                width={220}
                height={220}
              />
            </div>
            <div className="flex flex-col items-center justify-center  bg-[#212121] h-48 py-5 text-center text-white">
              <h3>GET 30% Off</h3>
              <p className="text-xs">USE PROMO CODE</p>
              <button className="bg-[#474747] px-8 py-3 tracking-widest text-white text-xs mt-1">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
          <div className=" bg-[#efe1c7]">
            <div className="p-5">
              <p>Flex Sweatshirt</p>
              <p className="text-base">
                <span className="line-through text-sm mr-1">$100.00</span>{" "}
                $75.00
              </p>
            </div>
            <Image
              alt=""
              src={"/promotions_image/14.png"}
              width={220}
              height={220}
              className="w-full h-auto max-w-full max-h-60 mx-auto"
            />
          </div>
          <div className=" bg-[#d7d7d9]">
            <div className="p-5">
              <p className="capitalize">Flex Push button bombar</p>
              <p className="text-base">
                <span className="text-sm line-through mr-1">$225.00</span>
                $190.00
              </p>
            </div>
            <Image
              alt=""
              src={"/promotions_image/14.png"}
              width={220}
              height={220}
              className="w-full h-auto max-w-full max-h-70 mx-auto"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Featured;
