import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, X } from "lucide-react";
import profilesData from "../data/codingProfiles.json";

const FloatingProfilesMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="mb-3 bg-slate-900 border border-white/10 rounded-2xl shadow-xl p-4 flex flex-col gap-3"
          >
            {profilesData.profiles.map((profile) => (
              <motion.a
                key={profile.id}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-4 py-2 bg-slate-800/80 rounded-xl hover:bg-slate-700 transition-colors duration-200"
              >
                <img
                  src={profile.icon}
                  alt={profile.name}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-white text-sm font-medium">{profile.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-violet-500 to-orange-500 text-white shadow-lg hover:shadow-violet-500/30 transition-all"
      >
        {isOpen ? <X size={22} /> : <Code size={22} />}
      </motion.button>
    </div>
  );
};

export default FloatingProfilesMenu;
