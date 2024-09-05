import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex bg-zinc-900 text-gray-300 p-10">
      {/* Social Media Icons */}
      <div className="flex space-x-8">
        <FaFacebook className="h-12 w-12 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
        <FaLinkedin className="h-12 w-12 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
        <FaInstagram className="h-12 w-12 cursor-pointer hover:text-pink-500 transition-colors duration-300" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-24 ml-auto">
        <h1 className="text-l text-center hover:text-gray-100 cursor-pointer">ABOUT US</h1>
        <h1 className="text-l text-center hover:text-gray-100 cursor-pointer">ARTICLES</h1>
        <button className="h-8 w-36 bg-gray-800 text-white ring-1 ring-gray-500 hover:bg-gray-700">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default Footer;
