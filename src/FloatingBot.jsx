import React, { useState } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const FloatingBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Bot */}
      <motion.div
        className="fixed bottom-8 right-8 w-28 h-28 z-50 cursor-pointer"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setOpen(!open)}
      >
        {/* Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-[rgb(3,252,252)]/20 blur-2xl animate-pulse"></div>

        <DotLottieReact
          src="https://lottie.host/027d7f2e-3238-4a56-8d96-13c3071af575/3A94FL8Khb.lottie"
          loop
          autoplay
        />
      </motion.div>

      {/* Chat Popup */}
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-40 right-8 w-72 bg-black/80 backdrop-blur-md border border-[rgb(3,252,252)]/40 rounded-xl p-4 shadow-2xl z-50"
          style={{ boxShadow: "0 0 20px rgba(3,252,252,0.4)" }}
        >
          <p
            className="text-sm text-[rgb(3,252,252)] font-mono"
            style={{ textShadow: "0 0 8px rgb(3,252,252)" }}
          >
            🤖 CyberRakshak AI Online
          </p>

          <p className="text-gray-300 text-xs mt-2">
            How can I assist you today?
          </p>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 text-xs text-[rgb(3,252,252)] hover:underline"
          >
            Close
          </button>
        </motion.div>
      )}
    </>
  );
};

export default FloatingBot;