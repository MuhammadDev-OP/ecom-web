import Image from "next/image";
import Hero from "./components/widgets/Hero";
import Featured from "./components/widgets/Featured";

export default async function Home() {
  return (
    <>
    <main>
    <Hero />
    <Featured />
    </main>
   </>
  );
}
