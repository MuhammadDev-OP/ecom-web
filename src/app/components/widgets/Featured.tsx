import Wrapper from "../shared/Wrapper";
import Image from "next/image";

export default function Featured() {
  return (
    <>
      <section>
        <Wrapper>
          <div className="items-center max-w-screen-xl mx-auto">
            <div className="mt-10">
              <h2 className="text-xs space tracking-widest font-bold text-blue-700 text-center">
                PROMOTIONS
              </h2>
              <h1 className="mt-1  text-xl sm:text-3xl font-semibold text-center text-bold">
                Our Promotions Events
              </h1>
            </div>
            {/* <div className="flex-1 mt-5">
              <div>
                <div className="flex bg-teal-400"> Hello M </div>
                <div className="flex bg-orange-400">hell</div>
              </div>

              <div>
                <div className="flex bg-teal-400"> Hello M </div>
              </div>
              <div>
                <div className="flex bg-teal-800"> Helrllo d</div>
              </div>
            </div> */}

            <div className="flex flex-col mt-5">
              <div className="flex ">
                <div className="flex p-24 bg-teal-400 mb-2 md:mb-0 md:mr-2">
                  <h2 className="flex">GET UP TO 60%</h2>
                  <p className="flex">For the summer reason</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
              <div className="flex p-24 bg-orange-400">hell</div>

                <div className="flex p-24 bg-teal-400 mb-2 md:mb-0 md:mr-2">
                  Hello M
                </div>
                <div className="flex p-24 bg-teal-800">Helrllo d</div>
              </div>
            </div>

            <div>
              <div className=""></div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
