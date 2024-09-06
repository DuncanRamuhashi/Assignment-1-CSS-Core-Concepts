import { useState } from 'react';

function Cover() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-cover bg-zinc-900 text-white">
      <div className="container mx-auto max-w-screen-lg py-6 px-4 flex justify-between items-center">
        {/* Logo / Title */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-mono text-zinc-100">
            Christian Bible
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          {/* Hamburger Menu Icon for Mobile */}
          <button
            className="text-[#edece8] text-3xl md:hidden pr-5"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>

          {/* Desktop & Mobile Navigation */}
          <ul
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-20 items-center space-y-5 md:space-y-0 `}
            aria-expanded={menuOpen}
          >
            <li>
              <a
                href="#about"
                className="text-lg md:text-xl text-zinc-100 hover:text-zinc-400 transition-all"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#articles"
                className="text-lg md:text-xl text-zinc-100 hover:text-zinc-400 transition-all"
              >
                ARTICLES
              </a>
            </li>
            <li>
              <button className="h-8 w-28 md:w-36 text-white bg-transparent ring-1 ring-gray-500 hover:bg-gray-900 transition-all">
                SUBSCRIBE
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Cover;
