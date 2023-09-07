import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";

const NewsLetter = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex justify-center max-w-screen-2xl mt-56">
          <h1 className="hidden md:block sm: absolute -z-10 overflow-hidden text-[5rem] bs:text-[4.8rem] sm:[6.2rem] lg:text-[7.5rem]  font-bold tracking-widest text-gray-200/40 ">
            NewsLetter
          </h1>
          <div className="max-w-full">
            <h1 className="font-semibold text-4xl mt-3 text-center">
              Subscribe our NewsLetter
            </h1>
            <h3 className="font-light  text-center mt-10">
              Get the latest information and promo offers directly
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full mt-5">
              <input
                type="email"
                placeholder="Input email address"
                className="px-2 border border-black text-sm py-2 w-full md:w-[40%]"
              />
              <Link href="/shopping">
                <button className="flex bg-zinc-900 text-white py-1 px-5 border-slate-600 border-2">
                  <div className="flex items-center">
                    {/* <BsCart size={"1.5em"} style={{ fontWeight: "bold" }} /> */}
                    <span className="ml-2 font-bold">Get Started</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default NewsLetter;
