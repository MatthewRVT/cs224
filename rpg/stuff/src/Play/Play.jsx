import React from 'react';
import '../../style.css';


export function Play(props) {
  return (
    <div className = "combat">
      <span className = "entity">
        <span className = "pic-container">
          <img className = "pic" src="/knight.png" alt="player model" />
        </span>
        <div className = "moves">
          <button type="button" className="btn btn-danger move">move 1</button>
          <button type="button" className="btn btn-danger move">move 2</button>
          <button type="button" className="btn btn-danger move">move 3</button>
        </div>
      </span>
      <span className = "entity">
        <span className = "pic-container">
          <img className = "pic" src="/knight2.png" alt="enemy model" />
        </span>
        <div className = "moves">
          <button type="button" className="btn btn-danger">enemy move 1</button>
          <button type="button" className="btn btn-danger">enemy move 2</button>
          <button type="button" className="btn btn-danger">enemy move 3</button>
        </div>
      </span>
    </div>
  );
}
