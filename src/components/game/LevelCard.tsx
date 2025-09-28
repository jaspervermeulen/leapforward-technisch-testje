import avatar from '@/assets/avatar.png';

import Image from 'next/image';
import Button from '../ui/Button';

interface LevelCardProps {
  name: string;
  description: string;
  isActive: boolean;
}

export default function LevelCard({
  name,
  description,
  isActive,
}: LevelCardProps) {
  return (
    <div
      className={`bg-white border-b-8 border-primary-blue-dark rounded-xl p-6 relative flex items-center flex-col text-center
            ${isActive ? 'opacity-100' : 'opacity-50'}
          `}
    >
      <Image
        src={avatar}
        alt="Avatar"
        className="lg:absolute top-0 transition duration-200 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 rounded-full border-2 border-white shadow-lg"
      />
      <p className="mt-8 lg:mt-16 text-primary-blue-dark text-xl font-bold">
        {name}
      </p>
      <div className="w-16 h-[2px] bg-primary-blue-dark mt-2"></div>
      <p className="mt-6">{description}</p>
      <div className="mt-6 w-full">
        <Button variant="blue" href="/game" disabled={!isActive}>
          Speel
        </Button>
      </div>
    </div>
  );
}
