import "./App.css";
import WordLine from "./components/WordLine";
import RandomWord from "./components/RandomWord";
import { useState } from "react";
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
  const [randomW, setRandomW] = useState([]);

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
        if (randomW.correctWord === words[activeIndex].word) {
          setIsEnd(true);
          alert("WYGRALES");
        }
        if (activeIndex === 5) {
          setIsEnd(true);
          alert("PRZEGRALES");
          console.log(randomW.correctWord);
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

  const checkWord = () => {
    const activeIndex = words.findIndex(
      (element) => element.active === "withFocus"
    );
    const correct = words[activeIndex].letters
      .map((element) =>
        randomW.correctWord.includes(element) ? element : null
      )
      .map((element, index) =>
        element === randomW.correctWord[index]
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
      randomW={randomW}
    />
  ));

  return (
    <div className="container" onKeyUp={handleKeyUp}>
      {gamePanel}
      <RandomWord randomW={randomW} setRandomW={setRandomW} />
    </div>
  );
};

export default App;
