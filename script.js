const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let root = document.documentElement;

function makeGrid(numberOfRows, numberOfColumns) {
  container.style.setProperty('--row-number', numberOfRows);
  container.style.setProperty('--column-number', numberOfColumns);
  for (i = 0; i <= numberOfRows * numberOfColumns; i++) {
    let row = document.createElement('div');
    container.appendChild(row).className = 'gridRow';
  }; 
};


makeGrid(20,20);

