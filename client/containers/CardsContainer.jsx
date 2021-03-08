import React, { Component } from 'react';
import SingleCard from '../components/SingleCard.jsx';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('CARDS CONTAINER user', this.props.user);
    console.log('CARDS CONTAINER deck', this.props.deck);
    console.log('CARDS CONTAINER this.props.cards', this.props.cards);

    let cards = [];
    for (let i = 0; i < this.props.cards.length; i++) {
      cards.push(<SingleCard key={`Card${i}`} question={this.props.cards[i].question} answer={this.props.cards[i].answer} />)
    }

    return (
      <div className="editContainer">
        <div className="greetingContainer">
          <h1 className='userDeckGreeting'>{this.props.user}'s {this.props.deck} deck</h1>
        </div>
        <div className="editSection">
          <div className="questionAnswerHeaders">
            <h1>Qs</h1>
            {/* <div className="headerDivider"></div> */}
            <h1>As</h1>
          </div>
          {cards}
        </div>
      </div>
    );
  }
}

export default CardsContainer;
