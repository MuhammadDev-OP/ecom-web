import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex justify-between max-w-screen-xl mx-auto pt-4 pb-4 items-center bg-red-200">
        <div className="text-xl font-bold">
          <h2>Dine Market</h2>
        </div>
        <ul className="flex space-x-10 text-lg font-normal ">
          <li>
            <Link href={"/"}>Female</Link>
          </li>
          <li>
            <Link href={"/"}>Male</Link>
          </li>
          <li>
            <Link href={"/"}>Kids</Link>
          </li>
          <li>
            <Link href={"/"}>All Products</Link>
          </li>
        </ul>

        <input type="text" className="border-zinc-950" />
      </header>
    </>
  );
}
