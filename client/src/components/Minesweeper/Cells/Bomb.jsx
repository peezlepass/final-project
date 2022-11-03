export default function Bomb({ red }) {
  let background = "bg-empty-cell-color";
  if (red) {
    background = "bg-red-bomb";
  }
  return (
    <div
      className={`w-20 h-20 ${background} border-4 border-empty-cell-border text-6xl flex items-center justify-center`}
    >
      💣
    </div>
  );
}
