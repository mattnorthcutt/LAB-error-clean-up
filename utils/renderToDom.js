const renderToDOM = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

// Create a new ID for the students
const createId = (array) => {
  if (array.length) {
    const idArray = array.map((el) => el.id);
    return Math.max(...idArray) + 1;
  }
  return 0;
};

const studentsOnDom = (divId, array, house = 'Hogwarts') => {
  let domString = '';
  if (!array.length) {
    domString += `NO ${house.toUpperCase()} STUDENTS`;
  }

  array.forEach((student) => {
    domString += `
    <div class="card bg-dark text-white">
      <img src="${
  divId === '#voldy'
    ? 'https://carboncostume.com/wordpress/wp-content/uploads/2019/10/deatheater-harrypotter.jpg' : student.crest}" 
          class="card-img" alt="${student.house} crest">
      <div class="card-img-overlay">
        <h5 class="card-title">${student.name}</h5>
        ${
  divId === '#voldy'
    ? '<p class="card-text">Death Eater</p>'
    : ` <p class="card-text">${student.house}</p>
          <button type="button" id="expel--${student.id}" class="btn btn-danger btn-sm">Expel</button>`
}
      </div>
    </div>
    `;
  });
  renderToDOM(divId, domString);
};

export { createId, renderToDOM, studentsOnDom };
