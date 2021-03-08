import React, { Component } from 'react';

class CreateDeck extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="createDeckCard">

        <div className="createDeckText">
          <button className="addDeckButton" onClick={(e) => {
      e.preventDefault();
      this.props.addDeck(e);
    }}>+{'\n'}ADD A NEW DECK</button>
        </div>



      </div>
    );
  }
}

export default CreateDeck;









  


// // <script>
// // function openForm() {
// //   document.getElementById("popupForm").style.display = "block";
// // }
// // function closeForm() {
// //   document.getElementById("popupForm").style.display = "none";
// // }
// // </script>


    //   {/* stuff for the form */}
    //   <div class="newDeckPopup">
    //   <div class="formPopup" id="popupForm">

    //     <form action="/action_page.php" class="formContainer">
    //       <h2>Create a New Deck</h2>
    //       <label for="deckName">
    //         <strong>New Deck Name</strong>
    //       </label>

    //       <input type="text" id="email" placeholder="Deck Name" name="deckName" required>
    //       <button type="submit" class="btn" onClick={(e) => { 
    //         e.preventDefault();
    //         this.props.addDeck(e);}}>
    //           Create
    //       </button>

    //       <button type="button" class="btn cancel" onClick={(e) => {
    //         e.preventDefault();
    //         this.props.closeForm(e);}}>
    //           Close
    //       </button>
    //     </form>
        
    //   </div>
    // </div>