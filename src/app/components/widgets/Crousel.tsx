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

const Crousel = async () => {
  const data: ICrousel[] = await getCrouselData();

  return (
    <section className="bg-[#f5f4f463] py-2 ">
      <Wrapper>
        <div className="grid grid-cols-2 max-w-screen-xl mx-auto gap-5 mt-20">
          <div className="col-span-2 col-start-1 h-full w-full  xl:col-start-2">
            <h3 className="text-[2.5rem] font-bold text-4xl sm:text-[2.75rem] tracking-[0.03em] leading-[3rem]">
              Unique and Authentic Vintage Designer Jewellery
            </h3>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-5">
            <div className="relative col-span-2 h-full w-full  xl:col-span-1">
              <div className="grid grid-cols-2 gap-10 mr-20">
                <div className=" ">
                  <h4 className="font-bold">Using Good Quality Materials</h4>
                  <p className="mt-5 font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className=" ">
                  <h4 className="font-bold">100% Handmade Products</h4>
                  <p className="mt-5 font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className=" ">
                  <h4 className="font-bold">Lorem, ipsum dolor.</h4>
                  <p className="mt-5 font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className=" ">
                  <h4 className="font-bold">Lorem, ipsum dolor.</h4>
                  <p className="mt-5 font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 overflow-hidden text-[5rem] sm:text-8xl  font-bold tracking-widest text-gray-200/70 -z-[10]">
                Different From Others
              </div>
            </div>
            <div className="col-span-2 xl:col-span-1">
              <div className="flex justify-start gap-5 flex-col h-full w-full items-center sm:flex-row">
                <div className="w-full -mt-2 sm:-mt-4 md:-mt-14 flex gap-5 justify-center">
                  {data.map((item) => (
                    <div>
                      <Image
                        className="top-5 drop-shadow-2xl"
                        src={urlForImage(item.image).url()}
                        width={250}
                        height={250}
                        alt="HeroImage"
                      />
                    </div>
                  ))}
                  <div className="flex flex-col mt-14 justify-center items-center gap-5 w-full ">
                    <p className="leading-6">
                      This piece is ethically crafted in our small family-owned
                      workshop in Peru with unmatched attention to detail and
                      care. The Natural color
                    </p>
                    <Link href="/shopping">
                      <button className="flex bg-zinc-900 text-white p-3 mt-4 border-slate-600 border-2">
                        {/* <BsCart size={"1.5em"} style={{ fontWeight: "bold" }} /> */}
                        <span className="ml-2 font-bold">Start Shopping</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Crousel;
