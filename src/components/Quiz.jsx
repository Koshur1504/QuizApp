import { useContext, useState } from "react";
import { gameStateContext } from "../helper/Context";
import { Questions } from "../helper/Questions";

export default function Quiz() {
  const { score, setScore, gameState, setGameState } = useContext(
    gameStateContext
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionsChosen, setOptionChosen] = useState("");

  const handleNext = () => {
    if (Questions[currentQuestion].asnwer === optionsChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setStyleA("");
    setStyleB("");
    setStyleC("");
    setStyleD("");
  };
  const handleFinish = () => {
    if (Questions[currentQuestion].asnwer === optionsChosen) {
      setCurrentQuestion(currentQuestion + 1);
      setScore(score + 1);
    }
    setGameState("end");
    setStyleA("");
    setStyleB("");
    setStyleC("");
    setStyleD("");
  };

  const [styleA, setStyleA] = useState("");
  const [styleB, setStyleB] = useState("");
  const [styleC, setStyleC] = useState("");
  const [styleD, setStyleD] = useState("");

  const buttonHandler = (e) => {
    setOptionChosen(e);
    if (e == "optionA") {
      setStyleA("chosen");
      setStyleB("");
      setStyleC("");
      setStyleD("");
    }
    if (e == "optionB") {
      setStyleA("");
      setStyleB("chosen");
      setStyleC("");
      setStyleD("");
    }
    if (e == "optionC") {
      setStyleA("");
      setStyleB("");
      setStyleC("chosen");
      setStyleD("");
    }
    if (e == "optionD") {
      setStyleA("");
      setStyleB("");
      setStyleC("");
      setStyleD("chosen");
    }
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          className={`${styleA}`}
          onClick={() => buttonHandler("optionA")}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={`${styleB}`}
          onClick={() => buttonHandler("optionB")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={`${styleC}`}
          onClick={() => buttonHandler("optionC")}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={`${styleD}`}
          onClick={() => buttonHandler("optionD")}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion == Questions.length - 1 ? (
        <button className="btn1" onClick={handleFinish}>
          Finish
        </button>
      ) : (
        <button className="btn1" onClick={handleNext}>
          Next Question
        </button>
      )}
    </div>
  );
}
