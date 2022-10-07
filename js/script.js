let rows = {
  set input(num) {
    if (num > 10 && num < 100) {
      rows = num;
    } else console.log("peiman: number is not allowed!");
  },
};

rows.input = 20;

let grid = Math.floor(960 / rows);
console.log(grid);

const sketchBoard = document.getElementById("sketch_board");

// create one square-div and set an id to it
function createSquars(id) {
  const newDiv = document.createElement("div");
  newDiv.id = id;
  newDiv.style.display = "inline-block";
  newDiv.style.boxSizing = "border-box";
  newDiv.style.border = "1px solid black";
  newDiv.style.width = `${rows}px`;
  newDiv.style.height = `${rows}px`;
  sketchBoard.appendChild(newDiv);
}

let squaresArray = []; // array of all squares

// creating a couple of scuares and index them for array
function numOfSquars(grid) {
  for (let i = 0; i < grid * grid; i++) {
    createSquars(i);
    squaresArray[i] = document.getElementById(i);
  }
}

// give a number and call create squares with the number
numOfSquars(grid);

// brush squares with click and mouseover them

window.addEventListener("mousedown", brush);

function brush() {  
  for (let i = 0; i < squaresArray.length; i++) {
    let square = squaresArray[i];
    square.addEventListener("mouseover", brushing);
    function brushing() {
      square.style.backgroundColor = "red";
    }
  }
}
