

function Cover(){

   return(
<header className="flex bg-cover bg-zinc-900 text-white">
  <div className="flex container mx-auto max-w-screen-lg py-6 px-4 justify-between items-center">
    {/* Logo / Title */}
    <div className="flex">
      <h1 className="text-3xl md:text-4xl font-bold font-mono text-zinc-100">
        Christian Bible
      </h1>
    </div>

    {/* Navigation */}
    <nav className="flex">
      <ul className="flex   space-x-10 md:space-x-20 items-center">
        <li>
          <a href="#" className="text-lg md:text-xl text-zinc-100 hover:text-zinc-400 transition-all">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className="text-lg md:text-xl text-zinc-100 hover:text-zinc-400 transition-all">
            ARTICLES
          </a>
        </li>
        <li>
          <button className="h-8 w-28 md:w-36  hidden md:block text-white bg-transparent ring-1 ring-gray-500 hover:bg-gray-900 transition-all">
            SUBSCRIBE
          </button>
        </li>
      </ul>
    </nav>
  </div>
</header>

        
   );
}
export default Cover