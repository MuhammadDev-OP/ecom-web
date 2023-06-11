
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