import React, { Component } from 'react';
import SingleCard from '../components/SingleCard.jsx';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hi from CardsContainer
        <SingleCard />
      </div>
    );
  }
}

export default CardsContainer;
