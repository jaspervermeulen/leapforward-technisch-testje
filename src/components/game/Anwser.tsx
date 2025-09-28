interface AnswerButtonProps {
  text: string;
  selected: boolean;
  correct: boolean;
  showResult: boolean;
  onClick: () => void;
}

export default function AnswerButton({
  text,
  selected,
  correct,
  showResult,
  onClick,
}: AnswerButtonProps) {
  let styles = 'bg-primary-blue-light text-primary-blue-dark';
  if (selected && !showResult) styles = 'bg-primary-blue-dark text-white';
  if (selected && showResult)
    styles = correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white';

  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full cursor-pointer transition-transform font-bold text-xl py-4 rounded-lg ${styles}`}
      >
        {text}
      </button>
    </li>
  );
}
