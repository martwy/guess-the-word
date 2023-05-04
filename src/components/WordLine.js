import { useState, useEffect, useRef } from "react";
const WordLine = ({ handle, active, correct, isEnd }) => {
  const [letter, setLetter] = useState([]);

  const handleKeyDown = (e) => {
    if (!isEnd) {
      if (letter.length <= 4 && e.key !== "Enter" && e.key !== "Backspace") {
        const newLetter = [...letter, e.key];
        setLetter(newLetter);
      } else if (e.key === "Enter") {
        if (letter.length === 5) handle(letter);
        else alert("SLOWO NIE ISTNIEJE");
      } else if (e.key === "Backspace") {
        const deleteLastLetter = [...letter.slice(0, letter.length - 1)];
        setLetter(deleteLastLetter);
      }
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  });

  return (
    <div
      className="word-box"
      onKeyDown={handleKeyDown}
      ref={ref}
      tabIndex={active === "withFocus" ? -1 : active}
    >
      <div className={`letter-box ${correct ? correct[0] : ""}`}>
        {letter[0]}
      </div>
      <div className={`letter-box ${correct ? correct[1] : ""}`}>
        {letter[1]}
      </div>
      <div className={`letter-box ${correct ? correct[2] : ""}`}>
        {letter[2]}
      </div>
      <div className={`letter-box ${correct ? correct[3] : ""}`}>
        {letter[3]}
      </div>
      <div className={`letter-box ${correct ? correct[4] : ""}`}>
        {letter[4]}
      </div>
    </div>
  );
};

export default WordLine;
