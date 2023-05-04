import "./App.css";
import WordLine from "./components/WordLine";
import { useState, useEffect, useRef } from "react";
const App = () => {
  const [words, setWords] = useState([
    {
      id: 0,
      word: "",
      letters: [],
      correct: [],
      active: "withFocus",
    },
    {
      id: 1,
      word: "",
      letters: [],
      correct: [],
      active: "withoutFocus",
    },
    {
      id: 2,
      word: "",
      letters: [],
      correct: [],
      active: "withoutFocus",
    },
    {
      id: 3,
      word: "",
      letters: [],
      correct: [],
      active: "withoutFocus",
    },
    {
      id: 4,
      word: "",
      letters: [],
      correct: [],
      active: "withoutFocus",
    },
    {
      id: 5,
      word: "",
      letters: [],
      correct: [],
      active: "withoutFocus",
    },
  ]);
  const [isEnd, setIsEnd] = useState(false);
  const correctWord = "motyl";

  const handleKeyUp = (e) => {
    if (!isEnd && e.key === "Enter") {
      const activeIndex = words.findIndex(
        (element) => element.active === "withFocus"
      );
      if (words[activeIndex].word) {
        let newWord = checkWord();
        newWord = [...newWord].map((word) => {
          if (word.id === activeIndex) {
            return { ...word, active: "withoutFocus" };
          }
          if (word.id === activeIndex + 1) {
            return { ...word, active: "withFocus" };
          }
          return word;
        });
        setWords(newWord);
        if (correctWord === words[activeIndex].word) {
          setIsEnd(true);
          alert("WYGRALES");
        }
        if (activeIndex === 5) {
          setIsEnd(true);
          alert("PRZEGRALES");
        }
      }
    }
  };

  const handleGetLetter = (letter) => {
    const activeIndex = words.findIndex(
      (element) => element.active === "withFocus"
    );
    const newWord = [...words].map((word) =>
      word.id === activeIndex
        ? { ...word, letters: [...letter], word: letter.join("") }
        : word
    );
    setWords(newWord);
  };

  const checkWord = (word) => {
    const activeIndex = words.findIndex(
      (element) => element.active === "withFocus"
    );
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

    const newWord = [...words].map((word) =>
      word.id === activeIndex ? { ...word, correct: correct } : word
    );
    return newWord;
  };

  const gamePanel = words.map((word) => (
    <WordLine
      key={word.id}
      active={word.active}
      correct={word.correct}
      handle={handleGetLetter}
      isEnd={isEnd}
    />
  ));

  return (
    <div className="container" onKeyUp={handleKeyUp}>
      {gamePanel}
    </div>
  );
};

export default App;
