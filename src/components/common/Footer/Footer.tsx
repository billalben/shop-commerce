import FacebookIcon from "@/assets/svg/facebook.svg?react";
import TwitterIcon from "@/assets/svg/twitter.svg?react";
import LinkedinIcon from "@/assets/svg/linkedin.svg?react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="pt-10 bg-gray-900 text-[#b9b9b9]">
      <div className="container grid justify-center gap-5 mb-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold text-white">Shop</h3>
          <ul className="flex gap-2 my-4">
            <li>
              <a
                href="https://www.facebook.com/billal.benzazoua"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center bg-[#313131] text-lg transition"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/billal-benzazoua/"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center bg-[#313131] text-lg transition"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/billal-benzazoua/"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center bg-[#313131] text-lg transition"
              >
                <LinkedinIcon />
              </a>
            </li>
          </ul>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            aliquid porro nihil voluptas molestiae sed!
          </p>
        </div>
        <div>
          <ul>
            <li className="pb-3 border-b border-gray-500">
              <a href="#">About Us</a>
            </li>
            <li className="pb-3 border-b border-gray-500">
              <a href="#">Contact Us</a>
            </li>
            <li className="pb-3 border-b border-gray-500">
              <a href="#">Careers</a>
            </li>
            <li className="pb-3">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="pb-3 border-b border-gray-500">
              <a href="#">Terms of Service</a>
            </li>
            <li className="pb-3 border-b border-gray-500">
              <a href="#">Refund Policy</a>
            </li>
            <li className="pb-3 border-b border-gray-500">
              <a href="#">Shipping Policy</a>
            </li>
            <li className="pb-3">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-3 text-center border-t border-gray-700">
        Made With &gt;3 By billal &copy; {date} Our E-commerce. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
