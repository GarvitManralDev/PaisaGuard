import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl font-bold text-white mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Wrong Seed Phrase
        </motion.h1>
        <motion.div
          className="w-16 h-16 border-4 border-white rounded-full mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        <motion.p
          className="text-xl text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Please check your seed phrase and try again.
        </motion.p>
      </motion.div>
      <motion.button
        className="mt-8 px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </motion.button>
    </div>
  );
}
