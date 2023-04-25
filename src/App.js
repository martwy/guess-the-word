import "./App.css";
import WordLine from "./components/WordLine";
import { useState, useEffect, useRef } from "react";
function App() {
  const [words, setWords] = useState([
    {
      id: 0,
      word: "",
      letters: [],
      correct: [],
      active: -1,
    },
    {
      id: 1,
      word: "",
      letters: [],
      correct: [],
      active: null,
    },
    {
      id: 2,
      word: "",
      letters: [],
      correct: [],
      active: null,
    },
    {
      id: 3,
      word: "",
      letters: [],
      correct: [],
      active: null,
    },
    {
      id: 4,
      word: "",
      letters: [],
      correct: [],
      active: null,
    },
    {
      id: 5,
      word: "",
      letters: [],
      correct: [],
      active: null,
    },
  ]);

  const correctWord = "Motyl";

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Enter works");
      const activeIndex = words.findIndex((element) => element.active === -1);
      console.log("Index przed: ", activeIndex);
      if (activeIndex < 5) {
        setWords((prevValue) => [
          ...prevValue,
          ((prevValue[activeIndex].active = null),
          (prevValue[activeIndex + 1].active = -1)),
        ]);
        console.log(
          "Index po: ",
          words.findIndex((element) => element.active === -1)
        );
        checkWord();
      } else if (activeIndex === 5) {
        console.log("KONIEC GRY");
      }
    }
  };

  const handleGetLetter = (letter) => {
    const activeIndex = words.findIndex((element) => element.active === -1);
    setWords((prevValue) => [
      ...prevValue,
      ((prevValue[activeIndex].letters = [...letter]),
      (prevValue[activeIndex].word = letter.join(""))),
    ]);
  };

  const checkWord = (word) => {
    const activeIndex = words.findIndex((element) => element.active === -1);
    const splittedWord = [...correctWord.toLowerCase()];

    const correct = words[activeIndex].letters
      .map((element) => (splittedWord.includes(element) ? element : null))
      .map((element, index) =>
        element === splittedWord[index]
          ? "correct-same"
          : element
          ? "correct-medium"
          : null
      );
    setWords((prevValue) => [
      ...prevValue,
      (prevValue[activeIndex].correct = correct),
    ]);
    console.log(splittedWord);
  };

  return (
    <div onKeyPress={handleKeyDown}>
      <WordLine
        marginek="przerwa"
        active={words[0].active}
        handle={handleGetLetter}
        checked={words[0].correct}
      />
      <WordLine
        active={words[1].active}
        handle={handleGetLetter}
        checked={words[1].correct}
      />
      <WordLine
        active={words[2].active}
        handle={handleGetLetter}
        checked={words[2].correct}
      />
      <WordLine
        active={words[3].active}
        handle={handleGetLetter}
        checked={words[3].correct}
      />
      <WordLine
        active={words[4].active}
        handle={handleGetLetter}
        checked={words[4].correct}
      />
      <WordLine
        active={words[5].active}
        handle={handleGetLetter}
        checked={words[5].correct}
      />
    </div>
  );
}

export default App;
