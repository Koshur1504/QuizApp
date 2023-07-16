import { useContext, useState } from "react";
import { gameStateContext } from "../helper/Context";
export default function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    gameStateContext
  );
  const [warning, setWarning] = useState(false);
  function handleSubmit() {
    if (userName) {
      setGameState("playing");
      setWarning(false);
    }
    if (!userName) {
      setWarning(true);
      setTimeout(()=>{setWarning(false)},4000)
    }
  }
  function handleEnter(a) {
    if (a.key == "Enter") {
      handleSubmit();
    }
  }
  return (
    <div className="Menu">
      {warning && <p id="p">Name Can't be Empty</p>}
      <h2 id="h2">Enter Your Name: </h2>
      <input
        type="text"
        name="input"
        required
        placeholder="Name"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        onKeyDown={(a) => handleEnter(a)}
      />
      <button onClick={(e) => handleSubmit()}>Start</button>
    </div>
  );
}
