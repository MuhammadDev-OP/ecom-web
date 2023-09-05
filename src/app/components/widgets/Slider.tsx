"use client";
import { client } from "@/lib/sanityClient";
import React, { useEffect } from "react";
import { StringRule } from "sanity";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import { useRouter } from "next/navigation";
import { product } from "../../../../sanity/product";

export const getSliderData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
        price,
        image,
        _id,
        title,
        category -> {
          name
        }
      }`);
  return res;
};

interface ISlider {
  price: number;
  title: string;
  _id: string;
  description: string;
  image: IImage;
}

const Slider = async () => {
  const data: ISlider[] = await getSliderData();
  const router = useRouter();

  return (
    <>
      <section>
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto mt-8">
            <div className="text-center mt-5 mb-20">
              <p className="text-blue-700 font-semibold">PRODUCTS</p>
              <h1 className="text-3xl mb-4 font-bold first:mt-0">
                Our Beautiful Product
              </h1>
            </div>
            {data.map((item) => (
              <div
                key={item._id}
                onClick={() => router.push("/shopping")}
                className="flex gap-10"
              >
                <Image src={urlForImage(item.image).url()} alt={"prod_image"} />
                <div className="">
                  <h2>{item.title}</h2>
                  <h3>${item.price}</h3>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Slider;
