import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { X, Heart, Code, Coffee, Bug, Zap, Rocket } from 'lucide-react';

interface FunFactsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FunFactsModal: React.FC<FunFactsModalProps> = ({ isOpen, onClose }) => {
  const funFacts = [
    {
      icon: Bug,
      title: "Fixed an infinite loop at 3 AM",
      description: "The best debugging happens when the world is quiet and your brain is in overdrive mode."
    },
    {
      icon: Code,
      title: "Believes console.log() is therapy",
      description: "Sometimes the best way to understand your code is to talk to it through console statements."
    },
    {
      icon: Coffee,
      title: "Can debug CSS in dreams",
      description: "When you code enough, your subconscious becomes your best pair programming partner."
    },
    {
      icon: Zap,
      title: "Once deployed to production on first try",
      description: "A rare moment of victory that every developer dreams of but rarely achieves."
    },
    {
      icon: Heart,
      title: "Falls in love with new frameworks weekly",
      description: "The eternal struggle between stability and the shiny new thing syndrome."
    },
    {
      icon: Rocket,
      title: "Thinks in components and props",
      description: "When you've been doing React long enough, everything becomes a component in your mind."
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl mac-window traffic-light border-cyan-400/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-cyan-400 font-mono">
            <Heart className="w-5 h-5" />
            Fun Facts About Chaitanya
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <h2 className="text-2xl font-bold text-gradient font-space">
              🎮 Easter Egg Discovered! 🎮
            </h2>
            <p className="text-muted-foreground">
              You found the secret! Here are some fun facts about the developer behind this cosmic portfolio.
            </p>
          </motion.div>

          {/* Fun Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-panel border border-cyan-400/20 p-4 rounded-lg hover:border-cyan-400/40 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-cyan-400">{fact.title}</h3>
                      <p className="text-sm text-muted-foreground">{fact.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Developer Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-panel border border-purple-400/20 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-3 font-mono">
              DEVELOPER_STATS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">∞</div>
                <div className="text-xs text-muted-foreground">Cups of Coffee</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-xs text-muted-foreground">Thinking Mode</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-xs text-muted-foreground">Passion Level</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">🚀</div>
                <div className="text-xs text-muted-foreground">Ready to Launch</div>
              </div>
            </div>
          </motion.div>

          {/* Secret Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center p-4 glass-panel border border-pink-400/20 rounded-lg"
          >
            <p className="text-sm text-muted-foreground">
              <span className="text-pink-400 font-mono">SECRET_MESSAGE:</span> 
              {" "}Thanks for exploring! This portfolio was built with love, 
              lots of coffee, and the power of modern web technologies. 
              Feel free to reach out if you want to collaborate on something amazing! 🌟
            </p>
          </motion.div>

          {/* Close Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
            >
              <X className="w-4 h-4 mr-2" />
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FunFactsModal;
