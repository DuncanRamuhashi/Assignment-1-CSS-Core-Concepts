import drone1 from './assets/b1.jpg';
import drone2 from './assets/b2.jpg';
import drone3 from './assets/b3.jpg';
import drone4 from './assets/b4.jpg';

function Latest() {
  return (
    <body className="bg-zinc-900 text-gray-300">
      {/* Hero Section */}
      <div className="relative h-full w-full bg-zinc-900 bg-cover bg-center flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-5xl font-extrabold text-white mb-6">Latest Versions</h1>
        <p className="text-xl text-gray-400 max-w-lg">
          Discover the most recent versions of these popular translations. Each one offers a unique reading experience.
        </p>
        <div className="w-24 h-1 mt-4 bg-gray-500"></div>
      </div>

      {/* Cards Section */}

      {/* Cards Section */}
<div className="flex flex-col md:flex-row justify-center h-full items-center bg-zinc-800 p-12 space-x-0 md:space-x-6 space-y-8 md:space-y-0">
  {/* Card 1 */}
  <div className="w-full sm:w-1/3 lg:w-1/4 h-full bg-zinc-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
    <img src={drone1} alt="NASB" className="h-60 w-full rounded-t-lg" />
    <div className="p-6 flex-grow">
      <h2 className="text-xl font-bold text-white mb-2">New American Standard Bible (NASB)</h2>
      <p className="text-gray-400 text-sm">
        A highly accurate and literal translation, great for in-depth study, but somewhat challenging to read.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-1/3 lg:w-1/4 h-full bg-zinc-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
    <img src={drone2} alt="KJV" className="h-60 w-full rounded-t-lg" />
    <div className="p-6 flex-grow">
      <h2 className="text-xl font-bold text-white mb-2">King James Version (KJV)</h2>
      <p className="text-gray-400 text-sm">
        One of the oldest and most popular translations, but its archaic language can be difficult for modern readers.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-1/3 lg:w-1/4 h-full bg-zinc-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
    <img src={drone3} alt="NLT" className="h-60 w-full rounded-t-lg" />
    <div className="p-6 flex-grow">
      <h2 className="text-xl font-bold text-white mb-2">New Living Translation (NLT)</h2>
      <p className="text-gray-400 text-sm">
        An interpretive translation that’s easy to understand, perfect for new readers of the Bible.
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="w-full sm:w-1/3 lg:w-1/4 h-full bg-zinc-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
    <img src={drone4} alt="NIV" className="h-60 w-full rounded-t-lg" />
    <div className="p-6 flex-grow">
      <h2 className="text-xl font-bold text-white mb-2">New International Version (NIV)</h2>
      <p className="text-gray-400 text-sm">
        A popular modern translation, focused on conveying the meaning of the original text.
      </p>
    </div>
  </div>
</div>

    </body>
  );
}

export default Latest;
