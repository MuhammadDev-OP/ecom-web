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
import { FC } from "react";


const ProductCard: FC<{ item: any }> = ({ item }) => {
  const handleAddtoCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item._id,
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
        <div className="">
          <button onClick={handleAddtoCart} className="bg-blue-500 p-2 border-2 rounded-lg">
            Add to Cart
          </button>
        </div>
    </>
  );
};

export default ProductCard;
