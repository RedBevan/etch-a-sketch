const container = document.getElementById('container');
let root = document.documentElement;

// Create grid and set class of new cells to 'cell'
function makeGrid(numberOfRows, numberOfColumns) {

  container.style.setProperty('--row-number', numberOfRows);
  container.style.setProperty('--column-number', numberOfColumns);

  for (i = 1; i <= numberOfRows * numberOfRows; i++) {
    let cell = document.createElement('div');
    cell.classList.add('new');
    container.appendChild(cell);
    cell.addEventListener('mouseover', () => {
      changeColor(cell)});
  };
};

// Declare function to change class of each cell
function changeColor(cell) {
  cell.setAttribute('class', 'hover');
  // cell.classList.toggle('hover');
};

// Declare function to change class of each cell
function changeColor(cell) {
  cell.setAttribute('class', 'hover');
  // cell.classList.toggle('hover');
};
   
makeGrid(55, 55);

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
  resetCells();
})

//create prompt function with minimum and maximum values
function getRowNumber() { prompt('How many rows? Choose a value between 10 and 64');
}; 

// This function resets the cells to 'new' class
function resetCells() {
  const containerNode = document.getElementById('container');
  while (containerNode.lastElementChild) {
    containerNode.removeChild(containerNode.lastElementChild);
  };
  let userInputNumberOfRows = prompt('How many rows?');
  makeGrid(userInputNumberOfRows, userInputNumberOfRows);
};

