import Logo from "@/assets/svg/logo.svg?react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/billalben"
            className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <Logo className="h-8" />
            <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">
              Shop
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
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
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2024{" "}
          <a
            href="https://github.com/billalben"
            className="hover:underline"
            target="_blank"
          >
            shop
          </a>
          . Made With &gt;3 By billal &copy; {date} Our E-commerce. All rights
          reserved..
        </span>
      </div>
    </footer>
  );
}

export default Footer;
