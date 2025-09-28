'use client';

import Button from '@/components/ui/Button';

export default function GameError() {
  return (
    <main className="bg-primary-blue font-onest min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center text-white space-y-4">
        <h1 className="text-6xl font-bold">Er is iets foutgelopen!</h1>
        <p className="max-w-2xl mx-auto text-balance text-lg">
          Er is iets misgelopen bij het laden van het spel. Probeer de pagina te
          herladen of keer terug naar de startpagina.
        </p>
        <div className="mt-6 w-1/2 mx-auto">
          <Button variant="blue" href="/">
            Terug naar startpagina
          </Button>
        </div>
      </div>
    </main>
  );
}
