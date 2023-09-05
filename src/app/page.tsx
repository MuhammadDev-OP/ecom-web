import Hero from "./components/widgets/Hero";
import Featured from "./components/widgets/Featured";
import Footer from "./components/widgets/Footer";
import Crousel from "./components/widgets/Crousel";
import Slider from "./components/widgets/Slider";

export default async function Home() {
  return (
    <>
      <main>
        <Hero />
        <Featured />
        <Slider />
        <Crousel />
        <Footer />
        {/* <Shopping /> */}
      </main>
    </>
  );
}
