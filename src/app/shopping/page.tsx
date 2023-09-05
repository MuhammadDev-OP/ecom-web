"use client";
import Image from "next/image";
import { BsCart } from "react-icons/Bs";
import { Image as IImage } from "sanity";
import { client } from "@/lib/sanityClient";
import axios from "axios";
import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/router";
import Wrapper from "../components/shared/Wrapper";
import { urlForImage } from "../../../sanity/lib/image";
import Footer from "../components/widgets/Footer";
import { product } from "../../../sanity/product";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";

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
  price: number | any;
  category: {
    name: string;
  };
}

export default async function shopping() {
  const data: GProduct[] = await getPD();

  const handleAddtoCart = async (product: GProduct) => {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: product._id,
          user_id: product._id,
          image: product.image,
          price: "100",
          product_name: product.title,
          subcat: product.category.name,
          quantity: "5",
          totalprice: "100",
        }),
      });

      if (res.ok) {
        toast.success("Product added to cart successfully");
      } else {
        throw new Error("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Failed to add product to cart");
    }
  };

  return (
    <>
      <Wrapper>
        <div className="flex gap-10 items-center max-w-screen-xl mx-auto mt-8">
          {data.map((item) => (
            <div>
              <div className="">
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
                  <div onClick={() => handleAddtoCart(item)}>
                    <ProductCard item={item} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
