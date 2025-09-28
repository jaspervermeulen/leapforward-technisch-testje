import Game from '@/components/game/Game';
import PlayerCard from '@/components/game/PlayerCard';
import GameLayout from '@/components/layout/GameLayout';

async function getQuestions() {
  const res = await fetch('http://localhost:3000/api/questions', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch questions');
  return res.json();
}

export default async function GamePage() {
  const questions = await getQuestions();

  return (
    <GameLayout>
      <GameLayout.Sidebar>
        <PlayerCard
          title="Drukkerij"
          description="Je moet je goed bewust zijn van wat jij allemaal moet doen. 
      Als drukafwerker heb je een heel uiteenlopend takenpakket. 
      Sommige van onderstaande taken behoren echter niet tot het takenpakket, 
      stop er snel mee voor je baas het ziet!"
          totalLevels={questions.length}
        />
      </GameLayout.Sidebar>
      <GameLayout.Content>
        <Game questions={questions} />
      </GameLayout.Content>
    </GameLayout>
  );
}
