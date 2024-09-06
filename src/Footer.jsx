import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
    
  return (
    <div className="flex justify-between   bg-zinc-900 text-gray-300 p-10 space-x-4">
      {/* Social Media Icons */}
      <div className="flex space-x-8">
        <FaFacebook className="h-12 w-5 md:w-12 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
        <FaLinkedin className="h-12  w-5 md:w-12 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
        <FaInstagram className="h-12 w-5 md:w-12 cursor-pointer hover:text-pink-500 transition-colors duration-300" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-10 ml-auto ">
        <a   href="#about">
        <h1 className=" text-sm md:text-l  text-center hover:text-gray-100 cursor-pointer">ABOUT US</h1>
       
        </a>
        <a   href="#latest">
        <h1 className=" text-sm md:text-l text-center hover:text-gray-100 cursor-pointer">VERSION</h1>
        </a>
       
        <button className="h-8 w-36  bg-gray-800 text-white ring-1 ring-gray-500 hover:bg-gray-700 hidden md:block">
             SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default Footer;
