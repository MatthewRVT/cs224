import React from 'react';
import './PvE.css';

export function PvE(props) {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    setImageUrl(`placeholder.jpg`);
    setQuote('Show me the code');
    setQuoteAuthor('Linus Torvalds');
  }, []);

  return (
    <div className="bg-secondary">
    {/* <header className="bg-accent navbar-brand">
      <nav>
        <menu>
          <li className = "nav-item"><a href="index.html"><button type="button" className="btn btn-outline-primary">Home</button></a></li>
          <li className = "nav-item"><a href="play.html"><button type="button" className="btn btn-primary">PvE</button></a></li>
          <li className = "nav-item"><a href="pvp.html"><button type="button" className="btn btn-outline-primary">PvP</button></a></li>
          <li className = "nav-item"><a href="character.html"><button type="button" className="btn btn-outline-primary">Character</button></a></li>
        </menu>
      </nav>
    </header> */}

    <main className = "combat">
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
          <img className = "pic" src="../../public/slime.png" alt="enemy model" />
        </span>
        <div className = "moves">
          <button type="button" className="btn btn-danger">enemy move 1</button>
          <button type="button" className="btn btn-danger">enemy move 2</button>
          <button type="button" className="btn btn-danger">enemy move 3</button>
        </div>
      </span>
    </main>

    <footer>
      <hr />
      <span className="text-reset">Created by: Matthew Van Tuyl</span>
      <br />
      <a href="https://github.com/MatthewRVT/cs260/tree/main">GitHub</a>
    </footer>
  </div>
  );
}
