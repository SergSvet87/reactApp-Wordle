const keyboardRows = ["qwertyuiop",
"asdfghjkl",
"zxcvbnm"]

const buttons = keyboardRows.map((row) => row.split(""))

export const Keyboard = ({onPressed, onBackspace}) => {

  return <div className="keyboard">
    {buttons.map((row, index) => (
        <div key={index}>
          {
            row.map((letter) => (
                <button onClick={() => onPressed(letter)} key={letter}>{letter}</button>
            ))
          }
        </div>
    ))}
    <div>
      <button onClick={() => onBackspace()}>Backspace</button>
    </div>
  </div>
};