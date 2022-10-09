let rows = {
  set input(num) {
    if (num > 10 && num < 100) {
      rows = num;
    } else console.log("peiman: number is not allowed!");
  },
};


rows.input = 15;
// rows.input = document.getElementById('grid_range').value;
// console.log(rows.input);

// setup sketch width
let widthScreen = screen.width;
let sketchWidth
if (widthScreen < 540) {
  sketchWidth = 320
} else sketchWidth = 500

let grid = Math.floor(sketchWidth / rows);
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
    document.getElementById(i).addEventListener("mousedown", brush);
    document.getElementById(i).addEventListener("mouseover", brush);
    squaresArray[i] = document.getElementById(i);
  }
}

// give a number and call create squares with the number
numOfSquars(grid);
let selectedColor = document.getElementById("exampleColorInput");
selectedColor.addEventListener("click", changeColor);
function changeColor() {
  return selectedColor.value;
}


// brush squares with click and mouseover them
let mouseDown = false;
document.body.addEventListener("mousedown", () => {
  mouseDown = true;
});
document.body.addEventListener("mouseup", () => {
  mouseDown = false;
});

function brush(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  else e.target.style.backgroundColor = changeColor();
}
