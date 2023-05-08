import { useEffect } from "react";
import dic from "./dictionary.txt";
const RandomWord = ({ randomW, setRandomW }) => {
  const getRandomWord = (words) => {
    words = words.split("\n");
    return setRandomW({
      correctWord: words[Math.floor(Math.random() * words.length)],
      acceptableWords: words,
    });
  };

  useEffect(() => {
    fetch(dic)
      .then((response) => response.text())
      .then((text) => getRandomWord(text));
  }, []);

  return <div></div>;
};

export default RandomWord;
