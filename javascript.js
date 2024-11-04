const containerSize = 700;
let gridSize = 16;

const red = "#FF0000";
const blue = "#0000FF";
const green = "#008000";
const yellow = "#FFFF00";
const black = "#000000";
const white = "#FFFFFF";
let selectedColor = "#000000";

let isMouseDown = false;

function generateCanvas () {
    const container = document.querySelector("#container");
    let numberOfBoxes = gridSize * gridSize; 
    let boxSize = `${containerSize / gridSize}px`;

    const body = document.querySelector("body");
    let parent = body.parentNode;
    body.removeChild(container);

    const colors = document.querySelector("#colors");

    const newContainer = document.createElement("div");
    newContainer.id = "container";
    body.insertBefore(newContainer, colors);

    for (let i = 0; i < numberOfBoxes; i ++){
        const div = document.createElement("div");
        div.classList.toggle("grid");
        div.style.cssText = `width: ${boxSize}; height: ${boxSize}`;
        newContainer.appendChild(div); 
    }    

    let gridElements = document.querySelectorAll(".grid");

    gridElements.forEach((grid) => {
        grid.addEventListener("mouseover", (event) => {
            selectedColor;
            if (isMouseDown) {
                grid.style.backgroundColor = selectedColor;
            }
            event.stopPropagation();
        })
    });
}

const newCanvas = document.querySelector("#newCanvas");

newCanvas.addEventListener("click", (event) => {
    userInput = prompt("Enter a number from 1 to 100 to define grid size for your canvas.");
    userInput = Number(userInput);
    console.log(userInput);

    if (userInput <= 100 && Number.isInteger(userInput)) {
        gridSize = userInput;
    } else {
        alert("Invalid grid size. Please select an integer from 1 to 100.");
    };

    generateCanvas();
    event.stopPropagation();
});

const colors = document.querySelector("#colors");
colors.addEventListener("click", (event) => {
    let userSelection = event.target;
    switch (userSelection.id) {
        case "red":
            selectedColor = red;
            break;
        case "blue":
            selectedColor = blue;
            break;
        case "green":
            selectedColor = green;
            break;
        case "yellow":
            selectedColor = yellow;
            break;
        case "black":
            selectedColor = black;
            break;
        case "erase":
            selectedColor = white;
            break;
        default:
            selectedColor = black;
    }
})



document.addEventListener("mouseup", () => {
    isMouseDown = false;
});
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

generateCanvas();
