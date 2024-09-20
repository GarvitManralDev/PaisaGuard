import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  const [seedPhrase, setSeedPhrase] = useState(Array(12).fill(""));

  const handleInputChange = (index, value) => {
    const newSeedPhrase = [...seedPhrase];
    newSeedPhrase[index] = value;
    setSeedPhrase(newSeedPhrase);
  };

  const handleUseSeedPhrase = () => {
    navigate("./ExistingUser", { state: { seedPhrase } });
  };

  const handleNewUser = () => {
    navigate("./NewUser");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white text-black rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Enter Your 12-Word Seed Phrase
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {seedPhrase.map((word, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Word ${index + 1}`}
                  value={word}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              ))}
            </div>
          </div>
          <div className="p-6 bg-gray-50 flex flex-col space-y-4">
            <button
              onClick={handleUseSeedPhrase}
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Use Entered Seed Phrase
            </button>
            <button
              onClick={handleNewUser}
              className="w-full bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-black transition-colors duration-200"
            >
              New User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
