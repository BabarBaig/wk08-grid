let position = 1;       // The starting position of the grid
const gridSize = 100;   // The total number of the grid cells

function createGrid() {
  // Should create a new Div based on the gridSize variable value
  // and append these divs to the element with id "target"
  for (let i = 1; i <= gridSize; i++){
    var div = document.createElement("div");
    div.id = 'n' + i;
    div.innerText = i;
    document.getElementById("target").appendChild(div);
  }
}
