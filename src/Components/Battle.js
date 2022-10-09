import React, { useState } from "react";
import { Link } from "react-router-dom";

function Battle() {
  let [player1, setPlayer1] = useState("");
  let [player2, setPlayer2] = useState("");
  let [click1, setClick1] = useState(false);
  let [click2, setClick2] = useState(false);

  const handleChange1 = (event) => {
    setPlayer1(event.target.value);
  };

  const handleChange2 = (event) => {
    setPlayer2(event.target.value);
  };

  const handleSubmit1 = () => {
    setClick1(!click1);
  };

  const handleSubmit2 = (event) => {
    setClick2(!click2);
  };

  return (
    <div className="battle">
      <h2>Instructions</h2>
      <div className="flex justify-center">
        <div>
          <p>Enter two GitHub users</p>
          <i className="battle-icons fa fa-users fa-5x users"></i>
        </div>
        <div>
          <p>Battle</p>
          <i
            className="battle-icons fa fa-fighter-jet fa-5x jet"
            aria-hidden="true"
          ></i>
        </div>
        <div>
          <p>See the Winner</p>
          <i
            className="battle-icons fa fa-trophy fa-5x trophy"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <h2>Players</h2>
      <div className="flex">
        <div>
          <p>Player One</p>
          {!click1 ? (
            <div className="flex justify-start">
              <input
                placeholder="github username"
                value={player1}
                onChange={handleChange1}
              />
              <button onClick={handleSubmit1} className="submit">
                Submit
              </button>
            </div>
          ) : (
            <div className="list large">
              <h4>{player1}</h4>
            </div>
          )}
        </div>
        <div>
          <p>Player Two</p>
          {!click2 ? (
            <div className="flex justify-start">
              <input
                placeholder="github username"
                value={player2}
                onChange={handleChange2}
              />
              <button onClick={handleSubmit2} className="submit">
                Submit
              </button>
            </div>
          ) : (
            <div className="list large">
              <h4>{player2}</h4>
            </div>
          )}
        </div>
      </div>
      {click1 && click2 ? (
        <Link to="/battle/final" exact>
          <button className="battle-btn">Battle</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default Battle;
