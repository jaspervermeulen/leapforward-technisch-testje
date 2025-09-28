'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useGame } from '@/context/GameContext';
import AnswerButton from '@/components/game/Anwser';
import Timer from '@/components/game/Timer';
import ScoreBadge from './ScoreBadge';

interface Answer {
  answer: string;
  correct: boolean;
}

interface Question {
  question: string;
  time_limit_s: number;
  answers: Answer[];
}

export default function Game({ questions }: { questions: Question[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addResult } = useGame();

  const currentIndex = Number(searchParams.get('question')) || 0;
  const currentQuestion = questions[currentIndex];

  const [selected, setSelected] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(currentQuestion.time_limit_s);
  const [timeMessage, setTimeMessage] = useState<string | null>(null);

  const handleToggle = useCallback(
    (index: number) => {
      if (showResult) return;
      setSelected((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    },
    [showResult]
  );

  const goToQuestion = useCallback(
    (index: number) => {
      const url = new URL(window.location.href);
      url.searchParams.set('question', String(index));
      router.push(url.pathname + url.search);
    },
    [router]
  );

  function handleSubmit(forced = false) {
    if (!showResult) {
      if (forced && selected.length === 0) {
        setTimeMessage('Je tijd is op!');
        setScore(0);
        addResult({
          question: currentQuestion.question,
          correct: 0,
          total: currentQuestion.answers.filter((a) => a.correct).length,
          timeUp: true,
        });
      } else {
        let correctCount = 0;
        selected.forEach((i) => {
          if (currentQuestion.answers[i].correct) correctCount++;
        });
        setScore(correctCount);
        addResult({
          question: currentQuestion.question,
          correct: correctCount,
          total: selected.length,
        });
      }
      setShowResult(true);
    } else {
      if (currentIndex < questions.length - 1) {
        goToQuestion(currentIndex + 1);
      } else {
        router.push('/game/end');
      }
    }
  }

  useEffect(() => {
    setSelected([]);
    setShowResult(false);
    setScore(null);
    setTimeMessage(null);
    setTimeLeft(currentQuestion.time_limit_s);
  }, [currentIndex, currentQuestion.time_limit_s]);

  useEffect(() => {
    if (showResult) return;
    if (timeLeft <= 0) {
      handleSubmit(true);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, showResult]);

  return (
    <div className="flex flex-col items-center bg-primary-blue-darkest rounded-lg h-full">
      <section className="flex flex-col items-center mt-6">
        <Timer timeLeft={timeLeft} />
        <p className="text-2xl mt-6 text-white font-bold max-w-2/3 text-balance text-center">
          {currentQuestion.question}
        </p>
      </section>

      <ul className="grid grid-cols-1 md:grid-cols-2 w-full px-12 gap-4 mt-12">
        {currentQuestion.answers.map((ans, index) => {
          return (
            <AnswerButton
              key={index}
              text={ans.answer}
              selected={selected.includes(index)}
              correct={ans.correct}
              showResult={showResult}
              onClick={() => handleToggle(index)}
            />
          );
        })}
      </ul>

      <section className="flex flex-col mb-12 w-1/2 mt-12 gap-4 relative">
        {showResult && score !== null && (
          <ScoreBadge
            message={
              timeMessage ? timeMessage : `${score} / ${selected.length} goed!`
            }
          />
        )}
        <Button
          variant="gray"
          onClick={handleSubmit}
          disabled={!showResult && selected.length === 0}
        >
          {showResult ? 'Volgende vraag!' : 'Klaar!'}
        </Button>
      </section>
    </div>
  );
}
