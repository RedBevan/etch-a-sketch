const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');

function makeGrid(numberOfRows, numberOfColumns) {
  for (i = 0; i <= numberOfRows; i++) {
    let row = document.createElement('div');
    container.appendChild(row).className = 'gridRow';
    
  }; 
};

makeGrid(44);

console.log(rows.Length);