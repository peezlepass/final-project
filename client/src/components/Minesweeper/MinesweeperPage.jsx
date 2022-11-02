import Bomb from "./Cells/Bomb";
import BombGuess from "./Cells/BombGuess";
import Empty from "./Cells/Empty";
import Number from "./Cells/Number";
import Unknown from "./Cells/Unknown";
import Board from "./Board";
import Cell from "./Cell";
import Counter from "./Counter";
import Field from "./Field";
import Header from "./Header";
import Restart from "./Restart";

export default function MinesweeperPage() {
  return (
    <div className="flex flex-col gap-y-8 items-center">
      <Board></Board>
      <Header></Header>
      <Restart></Restart>
      <Counter></Counter>
      <Field></Field>
      <Cell></Cell>
      <Bomb></Bomb>
      <BombGuess></BombGuess>
      <Empty></Empty>
      <Number></Number>
      <Unknown></Unknown>
    </div>
  );
}