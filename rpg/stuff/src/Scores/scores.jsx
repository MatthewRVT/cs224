import React from 'react';
import '../../style.css';


export function Scores({ userName, authState, onAuthChange }) {
  return (
    <span className = "combat">
      <h2>Here is where you can see previously used characters all in a row like so:</h2>
    <div className = "combat">
      <span className = "entity">
        <span className = "pic-container">
          <img className = "pic" src="../../public/knight.png" alt="player model" />
        </span>
        <div className = "moves">
          <button type="button" className="btn btn-danger move">move 1</button>
          <button type="button" className="btn btn-danger move">move 2</button>
          <button type="button" className="btn btn-danger move">move 3</button>
        </div>
      </span>
      <span className = "entity">
        <span className = "pic-container">
          <img className = "pic" src="../../public/knight.png" alt="enemy model" />
        </span>
        <div className = "moves">
          <button type="button" className="btn btn-danger">move 1</button>
          <button type="button" className="btn btn-danger">move 2</button>
          <button type="button" className="btn btn-danger">move 3</button>
        </div>
      </span>
    </div>
    </span>
  );
}
