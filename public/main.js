/* eslint-disable import/prefer-default-export */
import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import { events } from '../utils/sample_data/data';
import { renderToDOM } from '../utils/renderToDom';
import { htmlStructure } from '../components/visual';
// eslint-disable-next-line import/extensions

// ********** HTML Components  ********** //
// the basic HMTL structure of app
const header = () => {
  const domString = `<div class="container">
    <h1>Welcome to Hoggy Hogwarts Sorting Hat!</h1>
    <p>
      Hmm, difficult. VERY difficult. <br />Plenty of courage, I see.
      <br />Not a bad mind, either. There's talent, oh yes. <br />And a
      thirst to prove yourself. <br />But where to put you?
    </p>
  </div>`;

  renderToDOM('#header-container', domString);
};

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array
const startSortingBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="start-sorting">Start the Sorting Ceremony!</button>';

  renderToDOM('#form-container', domString);
};
// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};
startApp();
