import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Minimize2, Square } from 'lucide-react';
import { personalInfo, projects, techCategories } from '@/data/portfolio';
import SnakeGame from './SnakeGame';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Command {
  command: string;
  output: string | JSX.Element;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [showSnakeGame, setShowSnakeGame] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const commands = {
    help: () => (
      <div className="space-y-1">
        <div>Available commands:</div>
        <div className="ml-4 space-y-1">
          <div><span className="text-cyan-400">about</span> - Show about information</div>
          <div><span className="text-cyan-400">projects</span> - List all projects</div>
          <div><span className="text-cyan-400">skills</span> - Show technical skills</div>
          <div><span className="text-cyan-400">resume</span> - Download resume</div>
          <div><span className="text-cyan-400">easteregg</span> - 🎮 Play mini-games!</div>
          <div><span className="text-cyan-400">clear</span> - Clear terminal</div>
        </div>
      </div>
    ),
    about: () => (
      <div className="space-y-2">
        <div className="text-green-400">=== About {personalInfo.name} ===</div>
        <div>{personalInfo.description}</div>
        <div className="text-yellow-400">Tagline: {personalInfo.tagline}</div>
      </div>
    ),
    projects: () => (
      <div className="space-y-2">
        <div className="text-green-400">=== Projects ===</div>
        {projects.map((project, index) => (
          <div key={index} className="ml-4">
            <div className="text-cyan-400">{project.title}</div>
            <div className="text-gray-400 ml-2">{project.description}</div>
            <div className="text-yellow-400 ml-2">Tech: {project.tech.join(', ')}</div>
          </div>
        ))}
      </div>
    ),
    skills: () => (
      <div className="space-y-2">
        <div className="text-green-400">=== Technical Skills ===</div>
        {techCategories.map((category, index) => (
          <div key={index} className="ml-4">
            <div className="text-cyan-400">{category.category}:</div>
            <div className="text-gray-400 ml-2">{category.skills.join(', ')}</div>
          </div>
        ))}
      </div>
    ),
    resume: () => {
      window.open('/resume.pdf', '_blank');
      return <div className="text-green-400">Opening resume...</div>;
    },
    easteregg: () => {
      setCurrentGame('menu');
      return (
        <div className="space-y-2">
          <div className="text-green-400">🎮 Welcome to the Easter Egg Zone! 🎮</div>
          <div>Choose a mini-game:</div>
          <div className="ml-4 space-y-1">
            <div><span className="text-cyan-400">snake</span> - Play Snake game</div>
            <div><span className="text-cyan-400">quiz</span> - Tech trivia quiz</div>
            <div><span className="text-cyan-400">matrix</span> - Matrix rain effect</div>
          </div>
        </div>
      );
    },
    snake: () => {
      setShowSnakeGame(true);
      return <div className="text-green-400">🐍 Snake Game Launched! Use WASD or Arrow Keys to move.</div>;
    },
    quiz: () => {
      setCurrentGame('quiz');
      return <div className="text-green-400">🧠 Tech Quiz Started! Answer the questions.</div>;
    },
    matrix: () => {
      setCurrentGame('matrix');
      return <div className="text-green-400">🌧️ Matrix Rain Effect Activated!</div>;
    },
    clear: () => {
      setHistory([]);
      return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    
    if (command === 'exit' && currentGame) {
      setCurrentGame(null);
      setHistory(prev => [...prev, { command: input, output: 'Exited game mode.' }]);
    } else if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands]();
      setHistory(prev => [...prev, { command: input, output }]);
    } else {
      setHistory(prev => [...prev, { 
        command: input, 
        output: <div className="text-red-400">Command not found. Type 'help' for available commands.</div>
      }]);
    }
    
    setInput('');
  };

  const renderGame = () => {
    
    if (currentGame === 'quiz') {
      return (
        <div className="mt-4 space-y-2">
          <div className="text-green-400">🧠 Tech Quiz</div>
          <div>Q: What does React use for state management?</div>
          <div className="ml-4 space-y-1">
            <div>A) Redux</div>
            <div>B) useState/useReducer</div>
            <div>C) MobX</div>
            <div>D) All of the above</div>
          </div>
          <div className="text-yellow-400">Answer: D) All of the above</div>
        </div>
      );
    }
    
    if (currentGame === 'matrix') {
      return (
        <div className="mt-4">
          <div className="text-green-400">🌧️ Matrix Rain Effect</div>
          <div className="h-32 overflow-hidden bg-black border border-green-400">
            <div className="text-green-400 text-xs font-mono leading-tight">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  {Array.from({ length: 50 }).map((_, j) => (
                    <span key={j} className="opacity-70">
                      {Math.random() > 0.5 ? '1' : '0'}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };

  if (!isOpen) return null;

  return (
    <>
      {showSnakeGame && (
        <SnakeGame onClose={() => setShowSnakeGame(false)} />
      )}
      
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-4xl h-96 glass-panel border-2 border-cyan-400">
        <div className="flex items-center justify-between p-3 border-b border-cyan-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-cyan-400 font-mono">terminal.exe</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Minimize2 className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <Square className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={onClose}>
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="p-4 h-full overflow-y-auto bg-black text-green-400 font-mono text-sm">
          <div className="mb-4">
            <div>Welcome to Chaitanya's Terminal! Type 'help' for commands.</div>
            <div className="text-gray-400">Version 2.0.24 - Futuristic Control Room</div>
          </div>
          
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="text-cyan-400">
                <span className="text-green-400">user@portfolio</span>:<span className="text-blue-400">~</span>$ {item.command}
              </div>
              {item.output && <div className="ml-4 mt-1">{item.output}</div>}
            </div>
          ))}
          
          {renderGame()}
          
          <form onSubmit={handleSubmit} className="flex items-center mt-4">
            <span className="text-green-400">user@portfolio</span>:<span className="text-blue-400">~</span>$ 
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-green-400 ml-2 flex-1"
              autoComplete="off"
            />
            <span className="terminal-cursor">|</span>
          </form>
        </div>
      </Card>
    </div>
    </>
  );
};

export default Terminal;
