import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import { BsCart } from "react-icons/Bs";

export const getCrouselData = async () => {
  const res = await client.fetch(`*[_type=="crousel"]{
          image,
          description,
          _id,
          title,
        }`);
  return res;
};

interface ICrousel {
  title: string;
  _id: string;
  description: string;
  image: IImage;
}

export default async function Crousel() {
  const data: ICrousel[] = await getCrouselData();
  return (
    <>
      <section>
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto relative">

            <div className="my-2 max-w-lg md:max-xl lg:max-w-[284px] mx-8 px-8">
              <h1 className=" my-8 font-semibold text-lg">
                Using Good Quality Materials dsfsfsd
              </h1>
              <p className="font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                tempora? Tenetur{" "}
              </p>
              <h1 className="font-semibold text-lg my-8">
                Modern Design fashion
              </h1>
              <p className="font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                tempora? Tenetur reiciendis
              </p>
            </div>
            <div className="m2 max-w-lg md:max-xl lg:max-w-[284px] mx-8 px-8">
              <h1 className=" my-8 font-semibold text-lg">
                Using Good Quality Materials dsfsfsd
              </h1>
              <p className="font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                tempora? Tenetur{" "}
              </p>
              <h1 className="font-semibold text-lg my-8">
                Modern Design fashion
              </h1>
              <p className="font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                tempora? Tenetur reiciendis
              </p>
            </div>


            <div className="flex flex-col md:flex-row justify-center">
              {data.map((item) => (
                <div >
                  <Image
                  className="bg-stone-300 pt-8 px-8"
                    src={urlForImage(item.image).url()}
                    width={750}
                    height={650}
                    alt="HeroImage"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              {data.map((item) => (
                <div className="my-8 mx-8 max-w-[720px] " >
                  {/* <div className="absolute">
                    <h1 className="font-extrabold text-4xl">{item.title}</h1>
                  </div> */}
                  <p>{item.description}</p>
                  <button className="flex bg-zinc-900 text-white p-5 mt-16 border-slate-600 border-2">
                    <Link href="/shopping">
                      <div className="flex items-center">
                        <span className="ml-2 font-bold">Start Shopping</span>
                      </div>
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
