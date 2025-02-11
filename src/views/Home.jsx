import myFace from "../assets/IMG_4650.jpeg";
import React from "react";
import Background from "../components/Background";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen p-6 gap-2 text-white font-source"
      style={{ position: "relative", zIndex: 1 }}
    >
      {/* <Background /> */}

      {/* Image coming from top (downwards) */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={myFace} alt="myFace" className="w-48 rounded-full" />
      </motion.div>

      {/* Text coming from left (h1) */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col text-4xl justify-center items-center p-4 gap-2"
      >
        <h1 className="text-5xl">
          Hey, I’m <strong className="text-customGreen">Christina.</strong>
        </h1>
      </motion.div>

      {/* Text coming from right (p) */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="text-center text-xl"
      >
        <p>I'm a Full Stack Developer.</p>
      </motion.div>

      {/* Button coming from bottom */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <motion.button
          className="border border-white rounded p-2 relative mt-4"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            opacity: 1,
            boxShadow: "0 0 15px 6px rgba(255, 255, 255, 0.8)",
          }}
          whileTap={{ scale: 0.95 }} // Slightly shrinks on tap/click
          transition={{ duration: 0.3 }}
        >
          View my work ↓
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;