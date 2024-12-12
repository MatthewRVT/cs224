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
          <img className = "pic" src="../../public/slime.png" alt="enemy model" />
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
