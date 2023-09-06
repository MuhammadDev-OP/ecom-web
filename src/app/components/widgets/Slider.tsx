"use client";
import { client } from "@/lib/sanityClient";
import React, { useEffect, useState } from "react";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import { useRouter } from "next/navigation";

const getSliderData = async () => {
  try {
    const res = await client.fetch(`*[_type=="sliderImage"]{
      price,
      image,
      _id,
      title,
      category -> {
        name
      }
    }`);
    console.log("Fetched data:", res);
    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

interface ISlider {
  title: string;
  _id: string;
  description: string;
  image: IImage;
  price: number | any;
  category: {
    name: string;
  };
}

const Slider = () => {
  const router = useRouter();

  return (
    <>
      <section>
        <Wrapper>
          <div className="text-center mt-16 mb-20">
            <p className="text-blue-700 font-semibold">PRODUCTS</p>
            <h1 className="text-3xl mb-4 font-bold first:mt-0">
              Our Beautiful Product
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto mt-8 gap-16 ">
            <div
              className="md:ml-4 mb-4 md:mb-0 transition hover:scale-95 ease-in"
              onClick={() => router.push("/shopping")}
            >
              {" "}
              {/* Added margin for spacing */}
              <Image
                width={300}
                height={300}
                className="bg-rose-200 rounded-lg max-h-[500px] object-cover object-top "
                src={"/man_png.png"}
                alt={"product"}
              />
              <div className="mt-3 mb-4 font-semibold">
                <h2>Shirt Bomber</h2>
                <h3>$10</h3>
              </div>
            </div>
            <div
              className="md:ml-4 mb-4 md:mb-0 transition hover:scale-95 ease-in"
              onClick={() => router.push("/shopping")}
            >
              {" "}
              {/* Added margin for spacing */}
              <Image
                width={300}
                height={300}
                className="bg-yellow-200 rounded-lg max-h-[500px] object-cover object-top "
                src={"/man_png.png"}
                alt={"product"}
              />
              <div className="mt-3 mb-4 font-semibold">
                <h2>Shirt Bomber</h2>
                <h3>$10</h3>
              </div>
            </div>
            <div
              className="md:ml-4 mb-4 md:mb-0 transition hover:scale-95 ease-in"
              onClick={() => router.push("/shopping")}
            >
              {" "}
              {/* Added margin for spacing */}
              <Image
                width={300}
                height={300}
                className="bg-teal-200 rounded-lg max-h-[500px] object-cover object-top "
                src={"/man_png.png"}
                alt={"product"}
              />
              <div className="mt-3 mb-4 font-semibold">
                <h2>Shirt Bomber</h2>
                <h3>$10</h3>
              </div>
            </div>
            <div
              className="md:ml-4 mb-4 md:mb-0 transition hover:scale-95 ease-in"
              onClick={() => router.push("/shopping")}
            >
              {" "}
              {/* Added margin for spacing */}
              <Image
                width={300}
                height={300}
                className="bg-lime-200 rounded-lg max-h-[500px] object-cover object-top "
                src={"/man_png.png"}
                alt={"product"}
              />
              <div className="mt-3 mb-4 font-semibold">
                <h2>Shirt Bomber</h2>
                <h3>$10</h3>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Slider;
