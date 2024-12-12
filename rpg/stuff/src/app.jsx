import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './Play/Play';
import { Scores } from './scores/scores';
import { PvE } from './PvE/PvE';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App()   {const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
const [authState, setAuthState] = React.useState(currentAuthState);
  return (
  <BrowserRouter>
  <div className="body bg-secondary">
  <header className="bg-accent navbar-brand">
    <nav>
      <menu>
      <li className="nav-item">
      <button type="button" className="btn btn-outline-primary"><NavLink className='nav-link' to=''>
            Home
          </NavLink></button>
      </li>
      <li className="nav-item">
      <button type="button" className="btn btn-outline-primary"><NavLink className='nav-link' to='Play'>
            Play
          </NavLink></button>
      </li>
      <li className="nav-item">
      <button type="button" className="btn btn-outline-primary"><NavLink className='nav-link' to='PvE'>
            PvE
          </NavLink></button>
      </li>
      <li className="nav-item">
      <button type="button" className="btn btn-outline-primary"><NavLink className='nav-link' to='scores'>
            Scores
          </NavLink></button>
      </li>
      </menu>
    </nav>
  </header>

 
  <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/Play' element={<Play userName={userName} />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/PvE' element={<PvE />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

  <footer>
    <hr />
    <span className="text-reset">Created by: Matthew Van Tuyl</span>
    <br />
    <a href="https://github.com/MatthewRVT/cs260/tree/main">GitHub</a>
  </footer>
</div>

</BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
