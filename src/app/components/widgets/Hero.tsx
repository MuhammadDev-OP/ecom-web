import Image from "next/image";
import Wrapper from "../shared/Wrapper";
// import { BsCart } from "react-icons/Bs";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import { client } from "@/app/lib/sanityClient";
import { data } from "autoprefixer";
import Link from "next/link";
import { useRouter } from "next/router";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="heroimage"]{
        price,
        image,
        description,
        _id,
        title,
        category -> {
          name
        }
      }`);
  return res;
};

interface IProduct {
  title: string;
  _id: string;
  description: string;
  image: IImage;
  price: number;
  category: {
    name: string;
  };
}

export default async function Hero() {
  const data: IProduct[] = await getProductData();

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
              {data.map((item) => (
                <>
                  <h1 className="font-bold text-5xl sm:text-6xl  text-semibold">
                    {item.title}
                  </h1>
                  <h2 className="mt-8 text-base md:text-lg font-normal">
                    {item.description}
                  </h2>
                </>
              ))}
              {/* <div>
                <button className="flex bg-black text-white p-5 mt-8">
                    
                    <BsCart size={"1.5em"}  /> Start Shopping
                </button>
              </div> */}

              {/* <div> */}
              {/* <button
                  className="flex bg-zinc-900 text-white p-5 mt-8 border-slate-600 border-2"
                >
                  <BsCart size={"1.5em"} style={{ fontWeight: "bold" }} />
                  <span className="ml-2 font-bold">Start Shopping</span>
                </button>
              </div> */}
              <Link href="/shopping">
                <button className="flex bg-zinc-900 text-white p-5 mt-8 border-slate-600 border-2">
                  <div className="flex items-center">
                    {/* <BsCart size={"1.5em"} style={{ fontWeight: "bold" }} /> */}
                    <span className="ml-2 font-bold">Start Shopping</span>
                  </div>
                </button>
              </Link>

              <div className="flex mt-10 items-center space-y-3 md:space-x-16 flex-col md:flex-row">
                <Image
                  src={"/Featured1.webp"}
                  alt={"logo"}
                  width={150}
                  height={150}
                />
                <Image
                  src={"/Featured2.webp"}
                  alt={"logo"}
                  width={150}
                  height={150}
                />
                <Image
                  src={"/Featured3.webp"}
                  alt={"logo"}
                  width={150}
                  height={150}
                />
                <Image
                  src={"/Featured4.webp"}
                  alt={"logo"}
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="md:flex flex-1 hidden">
              <div>
                {data.map((item) => (
                  <Image
                    src={urlForImage(item.image).url()}
                    width={750}
                    height={750}
                    alt="HeroImage"
                  />
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
