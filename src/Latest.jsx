import drone1 from './assets/b1.jpg';
import drone2 from './assets/b2.jpg';
import drone3 from './assets/b3.jpg';
import drone4 from './assets/b4.jpg';

function Latest() {
  return (
    <div className="bg-zinc-900 text-gray-300">
      {/* Hero Section */}
      <div className="relative h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-4xl font-extrabold text-white mb-6">Latest Versions</h1>
        <p className="text-xl text-gray-400 max-w-lg">
          Discover the most recent versions of these popular translations. Each one offers a unique reading experience.
        </p>
        <div className="w-24 h-1 mt-4 bg-gray-500"></div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center bg-zinc-900 p-12 space-x-0 md:gap-6 lg:space-x-6 space-y-8 md:space-y-0">

          {/* Card 1 */}
          <div className="w-full sm:w-1/3 lg:w-1/4 h-[470px] lg:h-[400px] flex flex-col bg-zinc-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={drone1} alt="KJV" className="h-60 w-full rounded-t-lg object-fill" />
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-bold text-white mb-2">New American Standard </h2>
            <p className="text-gray-400 text-sm">
            A highly accurate and literal translation, great for in-depth study, but somewhat challenging to read.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-full sm:w-1/3 lg:w-1/4 flex flex-col h-[470px] lg:h-[400px] bg-zinc-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={drone2} alt="KJV" className="h-60 w-full rounded-t-lg object-fill" />
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-bold text-white mb-2">King James Version </h2>
            <p className="text-gray-400 text-sm">
              One of the oldest and most popular translations, but its archaic language can be difficult for modern readers.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-1/3 lg:w-1/4 flex flex-col h-[470px] lg:h-[400px]  bg-zinc-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={drone3} alt="NLT" className="h-60 w-full rounded-t-lg object-cover" />
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-bold text-white mb-2">New Living Translation </h2>
            <p className="text-gray-400 text-sm">
              An interpretive translation that’s easy to understand, perfect for new readers of the Bible.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-1/3 lg:w-1/4 flex flex-col h-[470px] lg:h-[400px] bg-zinc-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <img src={drone4} alt="NIV" className="h-60 w-full rounded-t-lg object-cover" />
          <div className="p-6 flex-grow">
            <h2 className="text-xl font-bold text-white mb-2">New International Version</h2>
            <p className="text-gray-400 text-sm">
              A popular modern translation, focused on conveying the meaning of the original text. Good for new readers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
