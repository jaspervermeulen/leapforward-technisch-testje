interface ScoreItemProps {
  question: string;
  correct: number;
  total: number;
  timeUp?: boolean;
}

export default function ScoreItem({
  question,
  correct,
  total,
  timeUp,
}: ScoreItemProps) {
  return (
    <li className="p-8 bg-primary-blue-light rounded-lg flex items-center flex-col gap-2 text-center shadow max-w-2/3 mx-auto">
      <h3 className="font-bold text-xl rounded-lg text-primary-blue-dark">{question}</h3>
      {timeUp ? (
        <p className="text-red-500 font-bold">Je tijd was op!</p>
      ) : (
        <p className="font-bold text-primary-blue-dark">
          Score: {correct} / {total}
        </p>
      )}
    </li>
  );
}
