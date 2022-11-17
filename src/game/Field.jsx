import { useEffect, useState } from "react";
import { getRandomWord } from "../utils/dictionary";
import { Keyboard } from "./Keyboard";
import { range } from "../utils/array";

const WORD_SIZE = 5;
const ROWS = 6;

// type CellState = {
//   letter: string;
//   variant?: "correct" | "semi correct" | "incorrect";
// };

const getEmptyState = () =>
  range(ROWS).map((row) =>
    range(WORD_SIZE).map((n) => ({
      letter: "",
    }))
  );

export const Field = () => {
  const [correctWord, setCorrectWord] = useState(getRandomWord());

  const [board, setBoard] = useState(getEmptyState());

  useEffect(() => {
    const handleKeyboard = (e) => {
      handlePressed(e.key);
    };

    document.addEventListener("keypress", handleKeyboard);
    return () => {
      document.removeEventListener("keypress", handleKeyboard);
    };
  }, [board]);

  const handlePressed = (letter) => {
    setBoard((prev) => {
      const newBoard = [...prev];

      const newBoardFlat = newBoard.flat();

      const nextCell = newBoardFlat.find(
        (element) => element.letter === ""
      );

      nextCell.letter = letter;

      return newBoard;
    });
  };

  const handleBackspace = () => {
    setBoard((prev) => {
      const newBoard = [...prev];

      const newBoardFlat = newBoard.flat();

      const nextCell = newBoardFlat.findIndex(
        (element) => element.letter === ""
      );

      newBoardFlat[nextCell - 1].letter = "";

      return newBoard;
    });
  };

  return (
    <>
      <p>{correctWord}</p>

      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row">
            {row.map((cell, index) => (
              <div className="cell" key={index}>
                {cell.letter}
              </div>
            ))}
          </div>
        ))}
      </div>

      <Keyboard
        onBackspace={() => handleBackspace()}
        onPressed={(letter) => handlePressed(letter)}
      />
    </>
  );
};