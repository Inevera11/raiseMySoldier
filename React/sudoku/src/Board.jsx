import React, { useEffect, useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  const [values, setValues] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let win = false;
    let winner = null;
    console.log(values);
    // TODO(when winner)
    if (win) {
      setWinner(winner);
    }
  }, [values]);

  const changeSquare = (i) => {
    if (values[i] !== null) return;

    const newArr = values.map((item, idx) => {
      if (i === idx) return player;
      return item;
    });
    setPlayer(player === "X" ? "O" : "X");
    setValues(newArr);
  };

  return (
    <div>
      {winner ? (
        <h2>The winner is {winner}</h2>
      ) : (
        values.map((item, i) => (
          <Square
            key={i}
            value={item}
            setValue={() => {
              changeSquare(i);
            }}
          />
        ))
      )}
    </div>
  );
};
