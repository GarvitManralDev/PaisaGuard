# 🔐 Multi-Wallet Generator (Solana + Ethereum)

This project is a simple **React-based wallet generator** that allows users to create and manage **Solana** and **Ethereum** wallets using a single BIP-39 seed phrase. It supports deterministic key generation using standard derivation paths and securely stores generated keypairs in localStorage.

---

## 🚀 Features

- 🔑 Generate new **12-word mnemonic (seed phrase)**
- 🪙 Create multiple **Solana wallets** (BIP44 path: `m/44'/501'/X'/0'`)
- 🦄 Create multiple **Ethereum wallets** (BIP44 path: `m/44'/60'/X'/0'`)
- 💾 Securely store keypairs in `localStorage` per seed phrase
- 📱 View wallets with public & private keys
- ❌ Show error if no keys exist for the seed phrase

---

## 🧱 Tech Stack

- **React.js**
- **Solana Web3** (`@solana/web3.js`)
- **Ethers.js**
- **BIP39** (`bip39`)
- **ed25519-hd-key**
- **tweetnacl**
- **localStorage** for persistence

---

Solana:
Uses ed25519-hd-key to derive key from path m/44'/501'/X'/0'

Converts derived 32-byte seed into full keypair using tweetnacl

Wraps it using Keypair.fromSecretKey from @solana/web3.js

Ethereum:
Uses ethers.HDNodeWallet to derive keys from path m/44'/60'/X'/0'

Directly obtains public and private keys from derived node

📌 Example Usage
On home page, click "Generate New Seed" or enter an existing one.

Create wallets for Solana and/or Ethereum.

Keys are displayed and stored locally under your seed.

Revisit with the same seed to restore your wallets.

⚠️ Disclaimer
This project is for educational/demo purposes.

Do NOT use it to store real funds.

Keys are stored in localStorage and are not encrypted.

