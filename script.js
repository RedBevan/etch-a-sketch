const container = document.getElementById('container');
let root = document.documentElement;

// Create grid and set class of new cels to 'cell'
function makeGrid(numberOfRows, numberOfColumns) {
  container.style.setProperty('--row-number', numberOfRows);
  container.style.setProperty('--column-number', numberOfColumns);
  for (i = 0; i <= numberOfRows * numberOfColumns; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell)
  }; 
};

makeGrid(9, 9);

const cells = document.getElementsByClassName('cell');

const cellsArray = [...cells];

cellsArray.forEach(function(cell) {
  cell.addEventListener('mouseover', () => {
    changeColor(cell);
  });
});

function changeColor(cell) {
  cell.setAttribute('class', 'hover');
};

const newGridBtn = document.getElementById('newGridBtn');

newGridBtn.addEventListener('click', () => {
  reset();
});

function reset() {
  let rowNumberInput = prompt('How many rows?');
  console.log(rowNumberInput);
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






