"use client";
import Image from "next/image";
import { BsCart } from "react-icons/Bs";
import { Image as IImage } from "sanity";

import { client } from "@/app/lib/sanityClient";
import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/router";
import Wrapper from "../components/shared/Wrapper";
import { urlForImage } from "../../../sanity/lib/image";
import Footer from "../components/widgets/Footer";
import { product } from "../../../sanity/product";

export const getPD = async () => {
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

interface GProduct {
  title: string;
  _id: string;
  description: string;
  image: IImage;
  price: number;
  category: {
    name: string;
  };
}

export default async function shopping() {
  const data: GProduct[] = await getPD();
  return (
    <>
      <Wrapper>
        <div className="items-center max-w-screen-xl mx-auto mt-8">
          {data.map((item) => (
            <div>
              
              <div className="">
              <Link href={"/"} >
                <Image
                  width={300}
                  height={300}
                  className="bg-yellow-300 flex-row rounded-lg max-h-[300px] object-cover object-top"
                  src={urlForImage(item.image).url()}
                  alt={"product"}
                />
                <div className="mt-3 mb-4 font-semibold">
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <div className="" >
                <button className="bg-blue-500 p-2 border-2 rounded-lg">Add to Cart</button>
              </div>
                </div>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}