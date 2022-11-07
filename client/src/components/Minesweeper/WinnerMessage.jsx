export default function WinnerMessage() {
  return (
    <div
      className="text-witcher-gold text-2xl font-bold text-center"
      style={{ textShadow: "1px 1px 2px black" }}
    >
      <p>Congratulations! You won 100 coins.</p>
      <img src="/img/coins.png" alt="100 coins" className="inline max-w-xs" />
      <p>Don't forget to toss one to your Witcher.</p>
    </div>
  );
}
