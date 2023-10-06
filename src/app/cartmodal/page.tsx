import React from "react";
import Wrapper from "../components/shared/Wrapper";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <Wrapper>
        <div className="max-w-screen-xl mx-auto my-10">
          <div className="relative">
            <Image
              src={"/man_png.png"}
              alt={"altimageCart"}
              width={100}
              height={80}
              className="bg-rose-200 hover:rounded-md transition hover:ease-in-out hover:delay-300 cursor-pointer"
            />
            <div className="">
              <Image
                src={"/man_png.png"}
                alt={"altimageCart"}
                width={400}
                height={400}
                className="bg-rose-200 max-w-xl"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default page;
