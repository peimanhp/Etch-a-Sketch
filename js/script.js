let rows = 55;
let grid = 9;
let gridBtnPressed = 0;

// stop dragging elements
document.body.ondragstart = () => {
  return false;
};

// buttons
const selectedColorBtn = document.getElementById("selectedColorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraser = document.getElementById("eraser");
const noGrid = document.getElementById("no_grid");
const clear = document.getElementById("clear");
const Save = document.getElementById("Save");

noGrid.checked = false;

// change grid with grid handler
let range = document.getElementById("grid_range");
range.value = 55;
range.oninput = (e) => {
  rows = e.target.value;
  grid = Math.floor(sketchWidth / rows);
  sketchBoard.innerHTML = "";
  numOfSquars(grid);
};

// setup sketch width
let widthScreen = screen.width;
let sketchWidth;
if (widthScreen < 540) {
  sketchWidth = 320;
} else sketchWidth = 500;

const sketchBoard = document.getElementById("sketch_board");

// create one square-div and set an id to it
function createSquars(id) {
  const newDiv = document.createElement("div");
  newDiv.id = id;
  newDiv.style.display = "inline-block";
  newDiv.style.boxSizing = "border-box";
  if (gridBtnPressed % 2 == 0) newDiv.style.border = "1px solid black";
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
  else if (rainbowBtn.checked == true) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
  } else if (selectedColorBtn.checked == true) {
    e.target.style.backgroundColor = changeColor();
  } else if (eraserBtn.checked == true) {
    e.target.style.backgroundColor = "";
  }
}

noGrid.addEventListener("click", onOffGrid);

function onOffGrid() {
  gridBtnPressed++;
  squaresArray.forEach((item) => {
    if (gridBtnPressed % 2 == 0) {
      item.style.border = "1px solid black";
      sketchBoard.style.border = "";
    } else {
      item.style.border = "";
      sketchBoard.style.border = "1px solid black";
    }
  });
}

clear.addEventListener("click", resetAll);

function resetAll() {
  squaresArray.forEach((item) => {
    item.style.backgroundColor = "";
  });
}
