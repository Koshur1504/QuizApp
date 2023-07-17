import { useContext, useState } from "react";
import { gameStateContext } from "../helper/Context";
import { Questions } from "../helper/Questions";

export default function Quiz() {
  const { score, setScore, gameState, setGameState } =
    useContext(gameStateContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionsChosen, setOptionChosen] = useState("");

  const handleNext = () => {
    if (Questions[currentQuestion].asnwer === optionsChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen("");
  };
  const handleFinish = () => {
    if (Questions[currentQuestion].asnwer === optionsChosen) {
      setCurrentQuestion(currentQuestion + 1);
      setScore(score + 1);
    }
    setGameState("end");
  };

  const buttonHandler = (e) => {
    setOptionChosen(e);
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          className={`${optionsChosen == "optionA" ? "chosen" : ""} qbtn`}
          onClick={() => buttonHandler("optionA")}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={`${optionsChosen == "optionB" ? "chosen" : ""} qbtn`}
          onClick={() => buttonHandler("optionB")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={`${optionsChosen == "optionC" ? "chosen" : ""} qbtn`}
          onClick={() => buttonHandler("optionC")}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={`${optionsChosen == "optionD" ? "chosen" : ""} qbtn`}
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
