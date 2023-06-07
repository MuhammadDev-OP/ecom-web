export default function Footer() {
  return (
    <footer className="bg-zinc-900 rounded-lg shadow mt-20 dark:bg-gray-200 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Dine Market
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-900">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-zinc-800 sm:mx-auto dark:border-gray-100 lg:my-8" />
        <span className="block text-sm text-black sm:text-center dark:text-black">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Dine Market™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
