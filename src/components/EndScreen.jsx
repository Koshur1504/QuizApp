import { useContext } from "react";
import { gameStateContext } from "../helper/Context";
import { Questions } from "../helper/Questions";

export default function EndScreen() {
  const {
    gameState,
    setGameState,
    userName,
    setUserName,
    score,
    setScore
  } = useContext(gameStateContext);
  const restart = () => {
    setGameState("menu");
    setUserName("");
    setScore(0);
  };
  return (
    <div className="EndScreen">
      <h1>Finished</h1>
      <h1>
        {userName}
        <br />
        You Scored
      </h1>
      <p>&#8595;</p>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restart}>Restart</button>
    </div>
  );
}
