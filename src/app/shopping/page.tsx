import Wrapper from "../components/shared/Wrapper";
import Footer from "../components/widgets/Footer";
import { client } from "../lib/sanityClient";
import { Image as IImage } from "sanity";

export const getProductData = async () => {
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





export default function shopping() {
  return (
    <>
      <Wrapper>
        <div className="items-center max-w-screen-xl mx-auto mt-8">
            <p>Hello</p>


        </div>
      </Wrapper>
      <Footer />
    </>
  );
}
