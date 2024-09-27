import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  const year =  new Date().getFullYear();
  return (
    <div className="flex  flex-col gap-10  bg-zinc-900 text-gray-300 p-10 space-x-4">
      <div className='flex justify-between space-x-4 '>
            {/* Social Media Icons */}
      <div className="flex space-x-8">
        <FaFacebook className="h-8 w-5 md:w-12 cursor-pointer hover:text-blue-500 transition-colors duration-300" />
        <FaLinkedin className="h-8  w-5 md:w-12 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
        <FaInstagram className="h-8 w-5 md:w-12 cursor-pointer hover:text-pink-500 transition-colors duration-300" />
      </div>

         

      {/* Navigation Links */}
      <div className="flex space-x-10 ml-auto ">
        <a   href="#about" className='py-2'>
        <h1 className=" text-sm  text-center hover:text-gray-100 cursor-pointer">ABOUT THE BIBLE</h1>
       
        </a>
        <a   href="#latest" className='py-2'>
        <h1 className=" text-sm  text-center hover:text-gray-100 cursor-pointer">VERSION</h1>
        </a>
        <a href='https://thekingsbible.com/'>
        <button className="h-8 w-36  bg-gray-800 text-white ring-1 ring-gray-500 hover:bg-gray-700 hidden md:block">
             READ BIBLE
        </button>
        </a>

      </div>
      </div>
         {/* Footer Copyright */}
         <div>
         <p className='text-gray-100 py-2 text-center  '>&copy; {year} Duncan Ramuhashi. All rights reserved.</p>
         </div>
     
    </div>
  );
}

export default Footer;
