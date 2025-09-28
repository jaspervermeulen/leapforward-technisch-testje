import { TimerIcon } from '@/components/ui/icons/TimerIcon';

export default function Timer({ timeLeft }: { timeLeft: number }) {
  return (
    <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 text-primary-blue-dark font-extrabold tabular-nums">
      <TimerIcon />
      <span>0:{timeLeft.toString().padStart(2, '0')}</span>
    </div>
  );
}
