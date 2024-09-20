import { useEffect, useState } from "react";

export default function WalletDisplay2({ seed, keys }) {
  const [solWallets, setSolWallets] = useState([]);
  const [ethWallets, setEthWallets] = useState([]);

  const generateWallets = () => {
    keys.forEach(({ network, publicKey, privateKey }) => {
      if (network === "Sol") {
        setSolWallets((prevSolWallets) => [
          ...prevSolWallets,
          { publicKey, privateKey },
        ]);
      } else if (network === "Eth") {
        setEthWallets((prevEthWallets) => [
          ...prevEthWallets,
          { publicKey, privateKey },
        ]);
      }
    });
  };

  const renderWallets = (wallets) => (
    <div className="mt-4 space-y-4">
      {wallets.map((wallet, index) => (
        <div
          key={index}
          className=" text-white bg-gray-900 p-4 rounded-lg shadow-md h-40"
        >
          <div className="space-y-2 break-words">
            <div className="h-16">
              <p className="text-sm">
                <span className="font-medium">Public Key:</span>{" "}
                {wallet.publicKey}
              </p>
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">Private Key:</span>{" "}
                {wallet.privateKey}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    generateWallets();
  }, []);

  const seedWords = seed ? seed.split(",") : [];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Seed Phrase</h2>
          {seedWords.length > 0 ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {seedWords.map((word, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-3 rounded-md text-center font-mono text-sm"
                >
                  {word}
                </div>
              ))}
            </div>
          ) : (
            <ErrorPage />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative  p-4 rounded-lg bg-white">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Solana Wallets
            </h2>
            {solWallets.length > 0 ? (
              renderWallets(solWallets)
            ) : (
              <p className="text-gray-500 italic">
                No Solana wallets available
              </p>
            )}
          </div>
          <div className="hidden md:block absolute left-1/2 top-5 bottom-3 -ml-px w-px bg-white"></div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Ethereum Wallets
            </h2>
            {ethWallets.length > 0 ? (
              renderWallets(ethWallets)
            ) : (
              <p className="text-gray-500 italic">
                No Ethereum wallets available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
