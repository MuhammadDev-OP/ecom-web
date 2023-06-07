'use client'
import { client } from "@/app/lib/sanityClient";
import React from "react";
import { StringRule } from "sanity";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";

// export const getProductData = async () => {
//   const res = await client.fetch(`*[_type=="product"]{
//         price,
//         image,
//         _id,
//         title,
//         category -> {
//           name
//         }
//       }`);
//   return res;
// };

// interface IProduct {
//   title: string;
//   _id: string;
//   description: string;
//   image: IImage;
//   price: number;
//   category: {
//     name: string;
//   };
// }

export default async function slider() {
 // const data: IProduct[] = await getProductData();
  return (
    <>
      {/* <section>
        <Wrapper>
          <div>
            {data.map((item) => (
              <div>
                <Image
                  width={100}
                  height={200}
                  src={urlForImage(item.image).url()}
                  alt={"product"}
                />
              </div>
            ))}
          </div>
        </Wrapper>
      </section> */}
    </>
  );
}
