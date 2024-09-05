import drone5 from './assets/prayer.jpg';

function About() {
  return (
    <div className="flex bg-zinc-900 text-gray-300">
      <div className="h-full w-full flex bg-zinc-900 rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <img
          src={drone5}
          alt="About Us Image"
          className="w-1/2 h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        
        {/* Text Section */}
        <div className="self-center p-12 w-1/2 flex flex-col justify-center space-y-8 bg-zinc-900">
          <h1 className="text-center font-bold text-white text-5xl">ABOUT US</h1>
          
          {/* Decorative line under heading */}
          <div className="flex justify-center">
            <div className="w-20 h-1 bg-gray-500"></div>
          </div>
          
          {/* About Us Text */}
          <p className="text-lg leading-relaxed text-gray-400">
          The Bible was written over 1500 years between about 1400 BC and 95AD. The Old Testament is God's dealings with Israel and consists of 39 books written and collected together over 1000 years from 1400BC to 400BC. Then there was a big gap of 400 years until Jesus was born. The New Testament consists of 27 books written between about 50AD and 95AD and is the record of the life and gospel of Jesus Christ. The Old Testament was originally written in Hebrew and Aramaic while the New Testament was written in Greek. Thus the Bible you read is a translation of these original ancient manuscripts which were very carefully preserved and translated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
