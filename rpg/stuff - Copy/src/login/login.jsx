import React from 'react';
import '../../style.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
  <main className = "pass">
    <h1>Welcome to my RPG project. This is my RPG project for the className CS 260.</h1>
    <h2>
      <ul>
        <li>Login on this page to save your progress.</li>
        <li>To Play offline single player select PvE</li>
        <li>To match with someone else online select Play.</li>
        <li>To view your characters select Characters</li>
      </ul>
    </h2>
    <div className = "another">
      <form method="get" action="Play.html">
        <div className="input-group mb-3 pass">
          <span className="input-group-text pass">@</span>
          <input className="form-control pass" type="text" placeholder="your@email.com" />
        </div>
        <div className="input-group mb-3 pass">
          <span className="input-group-text pass">🔒</span>
          <input className="form-control pass" type="password" placeholder="password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <button type="submit" className="btn btn-secondary">Create</button>
      </form>
      <div className = "dog">This is where the plugin to display random dog pictures will go</div>
    </div>
  </main>
  );
}
