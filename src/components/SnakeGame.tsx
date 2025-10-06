import React, { useState, useEffect, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SnakeGameProps {
  onClose: () => void;
}

const SnakeGame: React.FC<SnakeGameProps> = ({ onClose }) => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Position>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const GRID_SIZE = 20;
  const CELL_SIZE = 20;

  const generateFood = useCallback((): Position => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    
    // Make sure food doesn't spawn on snake
    const isOnSnake = snake.some(segment => 
      segment.x === newFood.x && segment.y === newFood.y
    );
    
    if (isOnSnake) {
      return generateFood();
    }
    
    return newFood;
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (!isPlaying || gameOver) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;
      
      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return prevSnake;
      }
      
      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }
      
      newSnake.unshift(head);
      
      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }
      
      return newSnake;
    });
  }, [direction, isPlaying, gameOver, food, generateFood]);

  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying && !gameOver) {
        if (e.key === ' ') {
          setIsPlaying(true);
          setDirection({ x: 1, y: 0 });
        }
        return;
      }

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        case ' ':
          if (gameOver) {
            // Restart game
            setSnake([{ x: 10, y: 10 }]);
            setFood(generateFood());
            setDirection({ x: 0, y: 0 });
            setGameOver(false);
            setScore(0);
            setIsPlaying(false);
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameOver, isPlaying, generateFood, onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-black border-2 border-green-400 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-green-400 font-mono text-lg">🐍 Snake Game</h2>
          <button
            onClick={onClose}
            className="text-red-400 hover:text-red-300 font-mono"
          >
            ESC
          </button>
        </div>
        
        <div className="text-green-400 font-mono text-sm mb-2">
          Score: {score}
        </div>
        
        <div className="grid grid-cols-20 gap-0 w-80 h-80 border border-green-400 mb-4">
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
            const x = i % GRID_SIZE;
            const y = Math.floor(i / GRID_SIZE);
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            const isHead = snake[0]?.x === x && snake[0]?.y === y;
            
            return (
              <div
                key={i}
                className={`w-4 h-4 ${
                  isHead ? 'bg-green-300' :
                  isSnake ? 'bg-green-400' : 
                  isFood ? 'bg-red-400' : 
                  'bg-black'
                }`}
              />
            );
          })}
        </div>
        
        <div className="text-green-400 font-mono text-xs space-y-1">
          {!isPlaying && !gameOver && (
            <div>Press SPACE to start</div>
          )}
          {gameOver && (
            <div className="text-red-400">Game Over! Press SPACE to restart</div>
          )}
          <div>Use WASD or Arrow Keys to move</div>
          <div>Press ESC to exit</div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
