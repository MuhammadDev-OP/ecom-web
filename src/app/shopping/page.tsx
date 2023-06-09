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
              <div className="grid grid-cols-[repeat(2, auto)] justify-center gap-x-10 ">
                <Image
                  width={200}
                  height={100}
                  className="max-h-[200px] object-cover object-top"
                  src={urlForImage(item.image).url()}
                  alt={"product"}
                />
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
