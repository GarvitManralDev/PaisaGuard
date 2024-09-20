import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

//For solana -
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { PublicKey } from "@solana/web3.js";
import DisplaySolKeys from "../components/DisplaySolKeys";

//For Eth -
//Baaki we just need to import Bip for seed generation but that is already done above.
import { Wallet, HDNodeWallet } from "ethers";
import DisplayEthKeys from "../components/DisplayEthKeys";

function NewUser() {
  //New Seed Generation -
  const [seedPhrase, setSeedPhrase] = useState(Array(12).fill(""));
  const [seed, setSeed] = useState();

  const getNewSeed = () => {
    const mnemonic = generateMnemonic();
    const mnemonicArr = mnemonic.split(" ");
    setSeedPhrase(mnemonicArr);
    const seed = mnemonicToSeedSync(mnemonic);
    setSeed(seed);
  };

  useEffect(() => {
    getNewSeed();
  }, []);

  //Sol logic
  const [solCurrentIndex, setSolCurrentIndex] = useState(0);
  const [solanaKeys, setSolanaKeys] = useState([]);
  const [localStorageItem, setLocalStorageItem] = useState([]);
  const handleCreateSolanaWallet = () => {
    //Creating the path and generating keys
    const path = `m/44'/501'/${solCurrentIndex}'/0'`;
    const derivedKey = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedKey).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    //Getting and converting Keys to a new base
    const publicKey = keypair.publicKey.toBytes();
    const secretKey = keypair.secretKey;
    const publicKeyBase58 = new PublicKey(publicKey).toBase58();
    const secretKeyBase64 = Buffer.from(secretKey).toString("base64");

    //Setting keys into the array
    setSolanaKeys([...solanaKeys, [publicKeyBase58, secretKeyBase64]]);
    setSolCurrentIndex(solCurrentIndex + 1);

    //Storing the keys wrt to seedphrase in local storage
    const obj = {
      network: "Sol",
      publicKey: publicKeyBase58,
      privateKey: secretKeyBase64,
    };

    setLocalStorageItem([...localStorageItem, obj]);
    localStorage.setItem(`${seedPhrase}`, JSON.stringify(localStorageItem));
  };

  //Eth logic
  const [ethCurrentIndex, setEthCurrentIndex] = useState(0);
  const [etheriumKeys, setEtheriumKeys] = useState([]);
  const handleCreateEthereumWallet = () => {
    //Creating the path and generating keys
    const path = `m/44'/60'/${ethCurrentIndex}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(path);

    //Setting keys into the array
    setEtheriumKeys([...etheriumKeys, [child.publicKey, child.privateKey]]);
    setEthCurrentIndex(ethCurrentIndex + 1);

    //Storing the keys wrt to seedphrase in local storage
    const obj = {
      network: "Eth",
      publicKey: child.publicKey,
      privateKey: child.privateKey,
    };
    setLocalStorageItem([...localStorageItem, obj]);
    localStorage.setItem(`${seedPhrase}`, JSON.stringify(localStorageItem));
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white text-black rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 p-6">
            <h1 className="text-3xl font-bold text-center">
              Create New Wallet
            </h1>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Your 12-Word Seed Phrase
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {seedPhrase.map((word, index) => (
                <div
                  key={index}
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <div className="text-center">{`Word ${index + 1}`}</div>
                  <div className="text-center font-bold">{word}</div>
                </div>
              ))}
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-900 font-bold">
                Make sure to save your seed phrase in a secure location. You'll
                need it to recover your wallet.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Create Solana Wallet
                </h3>
                <button
                  onClick={handleCreateSolanaWallet}
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-4"
                >
                  Generate Solana Wallet
                </button>
                <DisplaySolKeys arr={solanaKeys} />
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Create Ethereum Wallet
                </h3>
                <button
                  onClick={handleCreateEthereumWallet}
                  className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-4"
                >
                  Generate Ethereum Wallet
                </button>
                <DisplayEthKeys arr={etheriumKeys} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewUser;
