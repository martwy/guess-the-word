import { useState, useEffect, useRef } from "react";
function WordLine(props) {
  const [letter, setLetter] = useState([]);
  const handleKeyPress = (e) => {
    console.log("Key: ", e.key);
    if (letter.length <= 4 && e.key !== "Enter") {
      setLetter((letterBefore) => [...letterBefore, e.key]);
      console.log("Letter length: ", letter.length);
      console.log("Akutalna tablica: ", letter);
    } else if (e.key === "Enter") {
      console.log(letter);
      props.handle(letter);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      console.log("Backspace works");
      setLetter([...letter.slice(0, letter.length - 1)]);
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  });

  return (
    <div
      className={`word-box ${props.marginek}`}
      onKeyPress={handleKeyPress}
      onKeyDown={handleKeyDown}
      ref={ref}
      tabIndex={props.active}
    >
      <div className={`letter-box ${props.checked[0]}`}>{letter[0]}</div>
      <div className={`letter-box ${props.checked[1]}`}>{letter[1]}</div>
      <div className={`letter-box ${props.checked[2]}`}>{letter[2]}</div>
      <div className={`letter-box ${props.checked[3]}`}>{letter[3]}</div>
      <div className={`letter-box ${props.checked[4]}`}>{letter[4]}</div>
    </div>
  );
}

export default WordLine;
