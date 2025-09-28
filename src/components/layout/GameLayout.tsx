import React from 'react';

interface GameLayoutProps {
  children: React.ReactNode;
}

function GameLayout({ children }: GameLayoutProps) {
  return (
    <main className="bg-primary-blue-dark min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 font-onest">
      {children}
    </main>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="lg:col-span-4 bg-primary-blue p-6 rounded-2xl">
      {children}
    </aside>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <section className="lg:col-span-8 bg-primary-blue p-6 rounded-2xl">
      {children}
    </section>
  );
}

GameLayout.Sidebar = Sidebar;
GameLayout.Content = Content;

export default GameLayout;
