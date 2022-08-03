import React, { useEffect, useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  const [values, setValues] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    // let win = false;
    // let winner = null;
    const isWinner = (values) => {
      if (
        // first row
        (values.at(0) === values.at(1) &&
          values.at(1) === values.at(2) &&
          values.at(0) !== null) ||
        // second row
        (values.at(3) === values.at(4) &&
          values.at(4) === values.at(5) &&
          values.at(3) !== null) ||
        // third row
        (values.at(6) === values.at(7) &&
          values.at(7) === values.at(8) &&
          values.at(6) !== null) ||
        //first kolumn
        (values.at(0) === values.at(3) &&
          values.at(3) === values.at(6) &&
          values.at(6) !== null) ||
        //second kolumn
        (values.at(1) === values.at(4) &&
          values.at(4) === values.at(7) &&
          values.at(7) !== null) ||
        //third kolumn
        (values.at(2) === values.at(5) &&
          values.at(5) === values.at(8) &&
          values.at(8) !== null) ||
        // diagonal_1
        (values.at(0) === values.at(4) &&
          values.at(4) === values.at(8) &&
          values.at(0) !== null) ||
        // diagonal_2
        (values.at(2) === values.at(4) &&
          values.at(4) === values.at(6) &&
          values.at(2) !== null)
      )
        return [setWinner(true), setPlayer(player === "X" ? "O" : "X")];
      if (!values.includes(null) && !winner)
        return [setWinner(true), setPlayer("yet to come")];
    };
    isWinner(values);
  }, [values]);

  const changeSquare = (id) => {
    if (values[id] !== null) return;

    const newArr = values.map((item, idx) => {
      if (id === idx) return player;
      return item;
    });
    setPlayer(player === "X" ? "O" : "X");
    setValues(newArr);
  };

  return (
    <div>
      {winner ? (
        <h2>The winner is {player}</h2>
      ) : (
        values.map((item, id) => (
          <Square
            key={id}
            value={item}
            setValue={() => {
              changeSquare(id);
            }}
          />
        ))
      )}
    </div>
  );
};
