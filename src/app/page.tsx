import Image from "next/image";
import Hero from "./components/widgets/Hero";
import Featured from "./components/widgets/Featured";
import slider from "./components/widgets/Slider";
import Footer from "./components/widgets/Footer";

export default async function Home() {
  return (
    <>
      <main>
        <Hero />
        <Featured />
        <Footer />
      </main>
    </>
  );
}
