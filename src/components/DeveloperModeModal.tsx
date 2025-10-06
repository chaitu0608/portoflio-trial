import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, Github, Code, Database, Cpu, Binary } from 'lucide-react';

interface DeveloperModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeveloperModeModal: React.FC<DeveloperModeModalProps> = ({ isOpen, onClose }) => {
  const [binaryRain, setBinaryRain] = useState<string[]>([]);
  const [isRainActive, setIsRainActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRainActive(true);
      const interval = setInterval(() => {
        setBinaryRain(prev => {
          const newRow = Array.from({ length: 50 }, () => 
            Math.random() > 0.5 ? '1' : '0'
          ).join('');
          return [...prev.slice(-20), newRow];
        });
      }, 100);

      return () => clearInterval(interval);
    } else {
      setIsRainActive(false);
      setBinaryRain([]);
    }
  }, [isOpen]);

  const devStats = [
    { label: "Lines of Code", value: "50,000+", icon: Code },
    { label: "Git Commits", value: "1,200+", icon: Github },
    { label: "Projects", value: "15+", icon: Database },
    { label: "Technologies", value: "25+", icon: Cpu }
  ];

  const techStack = [
    "React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL",
    "Docker", "AWS", "Vercel", "Tailwind", "Framer Motion", "Three.js"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl mac-window traffic-light border-green-400/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-green-400 font-mono">
            <Terminal className="w-5 h-5" />
            DEVELOPER_MODE_ACTIVATED
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Matrix Rain Background */}
          {isRainActive && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
              <div className="font-mono text-green-400 text-xs leading-tight">
                {binaryRain.map((row, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                  >
                    {row}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2 relative z-10"
          >
            <h2 className="text-3xl font-bold text-gradient font-space">
              🚨 DEVELOPER MODE UNLOCKED 🚨
            </h2>
            <p className="text-muted-foreground">
              Konami Code detected! Welcome to the secret developer console.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-400 font-mono text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>ROOT_ACCESS_GRANTED</span>
            </div>
          </motion.div>

          {/* Developer Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10"
          >
            {devStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-panel border border-green-400/20 p-4 rounded-lg text-center"
                >
                  <Icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400 font-mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-panel border border-cyan-400/20 p-6 rounded-lg relative z-10"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4 font-mono flex items-center gap-2">
              <Binary className="w-5 h-5" />
              TECH_STACK_ANALYSIS
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="bg-cyan-400/10 border border-cyan-400/30 rounded px-2 py-1 text-center"
                >
                  <span className="text-cyan-400 font-mono text-xs">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10"
          >
            <div className="glass-panel border border-purple-400/20 p-4 rounded-lg">
              <h4 className="text-purple-400 font-mono text-sm mb-3">SYSTEM_INFO</h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">OS:</span>
                  <span className="text-foreground">macOS/Windows/Linux</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Editor:</span>
                  <span className="text-foreground">VS Code</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Terminal:</span>
                  <span className="text-foreground">iTerm2/Terminal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Browser:</span>
                  <span className="text-foreground">Chrome DevTools</span>
                </div>
              </div>
            </div>

            <div className="glass-panel border border-pink-400/20 p-4 rounded-lg">
              <h4 className="text-pink-400 font-mono text-sm mb-3">DEVELOPMENT_PHILOSOPHY</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <span className="text-muted-foreground">Clean, readable code</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <span className="text-muted-foreground">User-first design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <span className="text-muted-foreground">Performance optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                  <span className="text-muted-foreground">Continuous learning</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secret Commands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass-panel border border-yellow-400/20 p-4 rounded-lg relative z-10"
          >
            <h4 className="text-yellow-400 font-mono text-sm mb-3">SECRET_COMMANDS</h4>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">/warp</span>
                <span className="text-muted-foreground">- Activate hyperspace mode</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">avatar x3</span>
                <span className="text-muted-foreground">- Show fun facts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">↑↑↓↓←→←→BA</span>
                <span className="text-muted-foreground">- Developer mode (you found it!)</span>
              </div>
            </div>
          </motion.div>

          {/* Close Button */}
          <div className="flex justify-center pt-4 relative z-10">
            <Button
              onClick={onClose}
              variant="outline"
              className="border-green-400/30 text-green-400 hover:bg-green-400/10"
            >
              <X className="w-4 h-4 mr-2" />
              Exit Developer Mode
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeveloperModeModal;
