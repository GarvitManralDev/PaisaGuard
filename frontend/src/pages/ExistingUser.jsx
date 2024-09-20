import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import WalletDisplay from "../components/WalletDisplay";
import ErrorPage from "../components/ErrorPage";

function ExistingUser() {
  const [keys, setKeys] = useState([]);
  const [seed, setSeed] = useState("");
  // To get the user Entered Seed Phrase
  const location = useLocation();
  const { seedPhrase } = location.state;

  // To get the keys from the local storage
  const gettingkeys = () => {
    if (seedPhrase && seedPhrase.length > 0) {
      const seedPhraseString = seedPhrase.join(",");
      setSeed(seedPhraseString);

      // Retrieve the item and parse it from JSON
      const storedKeys = localStorage.getItem(seedPhraseString);
      if (storedKeys) {
        setKeys(JSON.parse(storedKeys));
      } else {
        console.log("No keys found for this seed phrase.");
      }
    }
  };

  useEffect(() => {
    gettingkeys();
  }, [seedPhrase]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      {keys && keys.length > 0 ? (
        <WalletDisplay seed={seed} keys={keys} />
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default ExistingUser;
