import React, { useState, useEffect } from 'react';

interface SecretEasterEggProps {
  onActivate: () => void;
}

const SecretEasterEgg: React.FC<SecretEasterEggProps> = ({ onActivate }) => {
  const [clickCount, setClickCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    // Show hint after 10 seconds
    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 10000);

    return () => clearTimeout(hintTimer);
  }, []);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount >= 5) {
      onActivate();
      setClickCount(0);
    }
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Secret Click Area */}
      <div
        className="fixed bottom-4 right-4 w-8 h-8 cursor-pointer z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Invisible click area */}
        <div className="w-full h-full" />
        
        {/* Visual feedback */}
        {isVisible && (
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        )}
      </div>

      {/* Hint Message */}
      {showHint && !isVisible && (
        <div className="fixed bottom-4 right-4 glass-panel border border-cyan-400 p-3 max-w-xs z-40">
          <div className="text-xs text-cyan-400 font-mono">
            💡 Hint: Try clicking the bottom-right corner multiple times...
          </div>
        </div>
      )}

      {/* Click Counter (only visible when hovering) */}
      {isVisible && clickCount > 0 && (
        <div className="fixed bottom-12 right-4 glass-panel border border-cyan-400 p-2 z-40">
          <div className="text-xs text-cyan-400 font-mono">
            Clicks: {clickCount}/5
          </div>
        </div>
      )}
    </>
  );
};

export default SecretEasterEgg;
