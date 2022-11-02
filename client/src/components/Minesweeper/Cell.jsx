import BombGuess from "./Cells/BombGuess";
import Unknown from "./Cells/Unknown";
import Bomb from "./Cells/Bomb";
import Empty from "./Cells/Empty";
import Number from "./Cells/Number";

const typeMap = {
  unknown: () => <Unknown></Unknown>,
  bomb: (props) => <Bomb {...props}></Bomb>,
  bombGuess: (props) => <BombGuess {...props}></BombGuess>,
  empty: () => <Empty></Empty>,
  number: (props) => <Number {...props}></Number>,
};

export default function Cell({ type, props }) {
  return typeMap[type](props);
}
