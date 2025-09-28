import Image from 'next/image';
import avatar from '@/assets/avatar.png';
import banner from '@/assets/banner.png';
import ProgressBar from './ProgressBar';
import Button from '../ui/Button';
import { ArrowCircleIcon } from '../ui/icons/ArrowCircle';
import { MusicalNoteIcon } from '../ui/icons/MusicalNote';
import { MapIcon } from '../ui/icons/Map';
import { HomeIcon } from '../ui/icons/HomeIcon';

interface PlayerCardProps {
  title: string;
  description: string;
  totalLevels?: number;
}

export default function PlayerCard({
  title,
  description,
  totalLevels,
}: PlayerCardProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-white rounded-lg flex flex-col h-full overflow-hidden shadow-lg">
        <div className="relative">
          <div className="absolute top-2 right-2 w-2/3 z-20">
            <ProgressBar total={totalLevels} />
          </div>
          <Image
            src={banner}
            alt="Banner"
            className="w-full h-42 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary-blue-dark/40 z-10"></div>
        </div>

        <div className="flex flex-col items-center z-20 -translate-y-16 px-6 text-center text-primary-blue-darkest flex-grow">
          <Image
            src={avatar}
            alt="Avatar"
            className="size-28 rounded-full z-20 shadow-lg border-4 border-white"
          />
          <h2 className="text-xl font-bold mt-10">{title}</h2>
          <div className="w-16 h-[2px] bg-primary-blue-dark mt-2"></div>
          <p className="font-light mt-6">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-3">
        <Button
          variant="blue"
          href="/"
          icon={<HomeIcon className="w-6 h-6" />}
        />
        <Button
          variant="blue"
          href="/game"
          icon={<ArrowCircleIcon className="w-6 h-6" />}
        />
        <Button
          variant="blue"
          href="/"
          icon={<MusicalNoteIcon className="w-6 h-6" />}
        />
        <Button
          variant="blue"
          href="/"
          icon={<MapIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  );
}
