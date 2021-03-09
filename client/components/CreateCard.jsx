import React, { Component } from 'react';

class CreateCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('EMERGENCY: ', this.props.addCard)
    return (

      // create a new deck
      <form
          className="createCardFlashcard"
          id="inputForm"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addCard(e);
          }}>
        <br />
        <div className="createCardContent">
          <label htmlFor="addNewCard" className="createCardText">ADD A NEW CARD</label>
          {/* <br /> */}
          <div className="createCardQuestion">
            <label htmlFor="addNewCard" className="questionAnswerPrompt">Question:</label>
            <input id="newQuestion" type="text" className="cardQAInput" />
          </div>
          {/* <br /> */}

          <div className="createCardAnswer">
            <label htmlFor="addNewCard" className="questionAnswerPrompt">Answer:</label>
            <input id="newAnswer" type="text" className="cardQAInput" />
          </div>
          <button className="createCardButton" type="submit">Create Card</button>
        </div>
      </form>

      



    );
  }
}

export default CreateCard;








  

