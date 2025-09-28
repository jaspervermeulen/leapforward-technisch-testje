'use client';

import { useSearchParams } from 'next/navigation';

interface ProgressBarProps {
  total?: number;
}

export default function ProgressBar({ total }: ProgressBarProps) {
  const searchParams = useSearchParams();
  const currentIndex = Number(searchParams.get('question')) || 0;
  const current = currentIndex + 1;

  if (!total || total <= 0) {
    return null;
  }

  const progress = (current / total) * 100;

  return (
    <div className="bg-primary-blue shadow-[0_4px_0_0_#004475] flex items-center gap-4 p-2 rounded-lg">
      <div className="relative flex-1 h-7 bg-primary-blue-dark rounded overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-yellow-400 transition-all"
          style={{
            width: `${progress}%`,
            background: `repeating-linear-gradient(45deg,#facc15,#facc15 10px,#fde047 10px,#fde047 20px)`,
          }}
        />
      </div>

      <span className="text-white font-bold">
        Level {current} / {total}
      </span>
    </div>
  );
}
