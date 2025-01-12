import React, { useState, useEffect } from "react";
import Cover from "./Cover";
import Display from "./Display";
import Latest from "./Latest";
import About from "./About";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Test from "./Test";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [verse, setVerse] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      fetchVerse(); // Fetch verse when opening the pop-up
    }
  };

  const fetchVerse = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://labs.bible.org/api/?passage=random&type=json"
      );
      const data = await response.json();
      if (data && data[0]) {
        const { bookname, chapter, verse: verseNumber, text } = data[0];
        setVerse(`${bookname} ${chapter}:${verseNumber} - ${text}`);
      }
    } catch (error) {
      setVerse("Failed to load verse. Please try again.");
      console.error("Error fetching the verse:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Main Sections */}
      <section id="/">
        <Test />
      </section>

      <section id="latest">
        <Latest />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="footer">
        <Footer />
      </section>

      {/* Button to trigger the pop-up */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={togglePopup}
          className="bg-accent text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-highlight transition"
        >
          Show Random Bible Verse
        </button>
      </div>

      {/* Pop-Up Component */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-secondary w-11/12 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-3 right-3 text-white font-bold text-lg hover:text-highlight transition"
            >
              &times;
            </button>

            {/* Pop-Up Content */}
            <h2 className="text-white text-3xl mb-4">Random Bible Verse</h2>

            {loading ? (
              <p className="text-gray-300">Loading verse...</p>
            ) : (
              <p className="text-gray-200">{verse}</p>
            )}

            {/* Button to load another verse */}
            <div className="mt-4">
              <button
                onClick={fetchVerse}
                className="bg-accent text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-highlight transition"
              >
                Get Another Verse
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
