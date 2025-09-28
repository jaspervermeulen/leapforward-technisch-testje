export default function ScoreBadge({ message }: { message: string }) {
  return (
    <div className="bg-green-500 rounded-lg z-20 px-4 py-2 absolute -top-6 -right-4 rotate-3 flex flex-col items-center">
      <p className="text-lg text-white font-bold">🎉 {message}</p>
    </div>
  );
}
