"use client"
import Image from "next/image";
import Hero from "./components/widgets/Hero";
import Featured from "./components/widgets/Featured";
import slider from "./components/widgets/Slider";
import Footer from "./components/widgets/Footer";
import Crousel from "./components/widgets/Crousel";

export default async function Home() {
  return (
    <>
      <main>
        <Hero />
        <Featured />
        <Crousel />
        <Footer />
        {/* <Shopping /> */}
      </main>
    </>
  );
}
