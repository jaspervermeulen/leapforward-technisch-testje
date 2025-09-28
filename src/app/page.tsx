import LevelCard from '@/components/game/LevelCard';
import { levels } from './data/levels';

export default function HomePage() {
  return (
    <main className="bg-primary-blue py-32 font-onest min-h-screen flex flex-col items-center justify-center px-4">
      <header className="text-center text-white space-y-4">
        <h1 className="text-6xl font-bold">Kies je niveau!</h1>
        <p className="text-lg">Welkom in Kansstad:</p>
        <p className="max-w-2xl mx-auto text-balance text-lg">
          Een virtueel spel waarin je kennis kan opdoen rond heel wat
          interessante beroepen. Begin er meteen aan.
        </p>
      </header>
      <section className="mt-12 md:mt-32 max-w-6xl w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {levels.map(({ id, ...props }) => (
          <LevelCard key={id} {...props} />
        ))}
      </section>
    </main>
  );
}
