import Cell from "./Cell";

export default function Field({ userField, width, dispatch }) {
  return (
    <div
      className="bg-empty-cell-color border-8 grid"
      style={{
        borderStyle: "inset",
        gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`,
      }}
    >
      {userField.map((cell, index) => {
        return (
          <Cell
            key={index}
            index={index}
            dispatch={dispatch}
            cell={cell}
          ></Cell>
        );
      })}
    </div>
  );
}
