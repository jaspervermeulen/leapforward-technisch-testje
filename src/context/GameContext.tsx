'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Result {
  question: string;
  correct: number;
  total: number;
  timeUp?: boolean;
}

interface GameContextType {
  results: Result[];
  addResult: (r: Result) => void;
  reset: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [results, setResults] = useState<Result[]>([]);

  function addResult(r: Result) {
    setResults((prev) => {
      const existingIndex = prev.findIndex(
        (res) => res.question === r.question
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = r;
        return updated;
      }

      return [...prev, r];
    });
  }

  function reset() {
    setResults([]);
  }

  return (
    <GameContext.Provider value={{ results, addResult, reset }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
}
