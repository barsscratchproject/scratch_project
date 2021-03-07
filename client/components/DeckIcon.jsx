import React from 'react';

const DeckIcon = () => {
  return (
    <article className="deck deckItem">
      <h3 className="deckHeader">Hi from DeckIcon</h3>
      <div className="deckBtnOptions">
        <button type="button" onClick={() => alert('testing 1')}>
          Edit Card
        </button>
        <button type="button" onClick={() => alert('testing 2')}>
          Delete Card
        </button>
      </div>
    </article>
  );
};
export default DeckIcon;
