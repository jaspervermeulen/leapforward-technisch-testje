'use client';

import PlayerCard from '@/components/game/PlayerCard';
import ScoreItem from '@/components/game/ScoreItem';
import GameLayout from '@/components/layout/GameLayout';
import Button from '@/components/ui/Button';
import { useGame } from '@/context/GameContext';
import Confetti from 'react-confetti';

export default function EndPage() {
  const { results } = useGame();

  if (results.length === 0) {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return null;
  }

  return (
    <GameLayout>
      <GameLayout.Sidebar>
        <PlayerCard
          title="Drukkerij"
          description="Je moet je goed bewust zijn van wat jij allemaal moet doen. 
          Als drukafwerker heb je een heel uiteenlopend takenpakket. 
          Sommige van onderstaande taken behoren echter niet tot het takenpakket, 
          stop er snel mee voor je baas het ziet!"
        />
      </GameLayout.Sidebar>
      <GameLayout.Content>
        <Confetti recycle={false} numberOfPieces={500} />
        <div className="flex flex-col items-center bg-primary-blue-darkest rounded-lg h-full">
          <p className="text-5xl mt-12 text-white font-bold text-balance text-center">
            Goed gespeeld!
          </p>
          <div className="mt-6">
            <p className="text-2xl text-white font-bold text-balance text-center">
              Dit zijn je scores:
            </p>
            {results.length === 0 ? (
              <p className="text-center text-white mt-6">
                Je hebt nog geen scores, speel eerst een spelletje!
              </p>
            ) : (
              <ul className="space-y-4 mt-6">
                {results.map((r, id) => (
                  <ScoreItem key={id} {...r} />
                ))}
              </ul>
            )}
          </div>
          <div className="flex mb-12 flex-col w-1/2 mt-12 gap-4 relative">
            <Button variant="gray" href="/game">
              Speel opnieuw!
            </Button>
          </div>
        </div>
      </GameLayout.Content>
    </GameLayout>
  );
}
