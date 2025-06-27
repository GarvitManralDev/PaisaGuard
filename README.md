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
⚠️ Disclaimer
This project is for educational/demo purposes.

Do NOT use it to store real funds.

Keys are stored in localStorage and are not encrypted.

