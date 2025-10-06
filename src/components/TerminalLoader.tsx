import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLoaderProps {
  onComplete: () => void;
}

const TerminalLoader: React.FC<TerminalLoaderProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const bootSequence = [
    "Initializing Mission Chaitanya...",
    "Establishing uplink to Space Network...",
    "Loading Mission Modules...",
    "Calibrating Navigation Systems...",
    "Initializing Cosmic Database...",
    "All Systems Online ✅"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => {
        if (prev < bootSequence.length - 1) {
          return prev + 1;
        } else {
          setIsComplete(true);
          clearInterval(interval);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 2;
        } else {
          clearInterval(progressInterval);
          return 100;
        }
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (isComplete && progress === 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isComplete, progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <div className="w-full max-w-2xl mx-4">
          {/* Terminal Window */}
          <div className="mac-window traffic-light">
            <div className="p-6">
              {/* Terminal Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-cyan-400 font-mono text-sm">mission-chaitanya.terminal</span>
              </div>

              {/* Boot Sequence */}
              <div className="terminal min-h-[300px] p-4 rounded-lg">
                <div className="space-y-2">
                  {bootSequence.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: index <= currentLine ? 1 : 0,
                        x: index <= currentLine ? 0 : -20
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-green-400 font-mono">
                        {index <= currentLine ? '>' : ' '}
                      </span>
                      <span className="text-cyan-400 font-mono">
                        {line}
                      </span>
                      {index === currentLine && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="text-cyan-400 font-mono"
                        >
                          |
                        </motion.span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-cyan-400 font-mono text-sm">Loading Progress:</span>
                    <span className="text-green-400 font-mono text-sm">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full cosmic-cyber rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* System Status */}
                <div className="mt-6 grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Navigation: Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Database: Connected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Security: Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Communication: Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mt-8"
          >
            <h1 className="text-4xl font-bold text-gradient font-space mb-2">
              Mission Chaitanya
            </h1>
            <p className="text-cyan-400 font-mono text-sm">
              Exploring the web universe, one component at a time
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalLoader;
