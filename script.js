const container = document.getElementById('container');

let root = document.documentElement;

function makeGrid(numberOfRows, numberOfColumns) {
  container.style.setProperty('--row-number', numberOfRows);
  container.style.setProperty('--column-number', numberOfColumns);
  for (i = 0; i <= numberOfRows * numberOfColumns; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    container.appendChild(cell);
    console.log(cell.className);
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

console.log(cellsArray);

function reset() {
  let rowNumberInput = prompt('How many rows?');
  console.log(rowNumberInput);
  makeGrid(rowNumberInput, rowNumberInput);
  for (i=0; i<=cellsArray.length; i++) {
    cellsArray[i].setAttribute('class', 'cell');
  };
};






