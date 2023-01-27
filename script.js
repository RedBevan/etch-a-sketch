const container = document.getElementById('container');
let root = document.documentElement;

// Create grid and set class of new cels to 'cell'
function makeGrid(numberOfRows, numberOfColumns) {

  container.style.setProperty('--row-number', numberOfRows);
  container.style.setProperty('--column-number', numberOfColumns);

  for (i = 0; i <= numberOfRows * numberOfColumns; i++) {
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
   
makeGrid(5,5);

const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
  resetCells();
})

// This function resets the cells to 'cell' class
function resetCells() {
  let userInputNumberOfRows = prompt('How many rows?');
  makeGrid(userInputNumberOfRows, userInputNumberOfRows);
  const cells = document.getElementsByClassName('new');
  const hoverCells = document.getElementsByClassName('hover');
  const newCellsArray = [...cells];
  const hoverCellsArray = [...hoverCells];
  const allCellsArray = [...cells, ...hoverCells];
  console.log(allCellsArray);
  allCellsArray.forEach(function(cell) {
    cell.setAttribute('class', 'new');
    });
  };

/*
// Reset the grid
function reset() {
 // let rowNumberInput = prompt('How many rows?');
  //console.log(rowNumberInput);
  if (rowNumberInput > 50) {
    let rowNumberInput = prompt('Row number must be 50 or less');
    for (i=0; i<=cellsArray.length; i++) {
      cellsArray[i].setAttribute('class', 'cell');
    };
    makeGrid(rowNumberInput, rowNumberInput);
  } else {
  makeGrid(rowNumberInput, rowNumberInput);
  for (i=0; i<=cellsArray.length; i++) {
    cellsArray[i].setAttribute('class', 'cell');
    
  };
}};

makeGrid(9, 9);

// Assign variable to each cell
const cells = document.getElementsByClassName('cell');

// Create array of all cells
const cellsArray = [...cells];

console.log(cellsArray.length);

*/

// Add hover event listener to each cell
/* cellsArray.forEach(function(cell) {
  cell.addEventListener('mouseover', () => {
    changeColor(cell);
  });
});
*/












