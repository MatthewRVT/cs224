import React from 'react';
import '../../style.css';

import { Button } from 'react-bootstrap'


// fetch('/api/scores')
// .then((response) => response.json())
// .then((scores) => {
//   setScores(scores);
// });
// }, []);


export function Scores() {
  const [amtesting, setMove] = React.useState("testing");

  // Demonstrates calling a service asynchronously so that
  // React can properly update state objects with the results.
  function handleClick(move) {
    fetch('/api/test')
      .then((response) => response.json())
      .then((testing) => {
        console.log(testing.test);
      setMove(move.test)
      });
}

  
  return (
    
    <span className = "combat">
      <h2>Here is where you can see previously used characters all in a row like so:</h2>
    <div className = "combat">
      <span className = "entity">
        <span className = "pic-container">
          <img className = "pic" src="/knight.png" alt="player model" />
        </span>
        <div className = "moves">
          <Button onClick={handleClick({test:"Rock"})} className="btn btn-danger move">Rock</Button>
          <button onClick={handleClick({test:"Paper"})} type="button" className="btn btn-danger move">Paper</button>
          <button onClick={handleClick({test:"Scissors"})} type="button" className="btn btn-danger move">Scissors</button>
        </div>
      </span>
      <span className = "entity">
        <span className = "pic-container">
          <img className = "pic" src="/knight.png" alt="enemy model" />
        </span>
        <div className = "moves">
          <Button onClick={handleClick({test:"Rock"})} className="btn btn-danger move">Rock</Button>
          <button onClick={handleClick({test:"Paper"})} type="button" className="btn btn-danger move">Paper</button>
          <button onClick={handleClick({test:"Scissors"})} type="button" className="btn btn-danger move">Scissors</button>
        </div>
        <div>{amtesting}</div>
      </span>
    </div>
    </span>
  );
}
