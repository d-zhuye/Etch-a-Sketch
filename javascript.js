let isMouseDown = false;
const containerSize = 700;
let gridSize = 16;

function generateCanvas () {
    const container = document.querySelector("#container");
    let numberOfBoxes = gridSize * gridSize; 
    let boxSize = `${containerSize / gridSize}px`;

    const body = document.querySelector("body");
    body.removeChild(container);

    const newContainer = document.createElement("div");
    newContainer.id = "container";
    body.appendChild(newContainer);

    for (let i = 0; i < numberOfBoxes; i ++){
        const div = document.createElement("div");
        div.classList.toggle("grid");
        div.style.cssText = `width: ${boxSize}; height: ${boxSize}`;
        newContainer.appendChild(div)
    }    

    
    let gridElements = document.querySelectorAll(".grid");

    gridElements.forEach((grid) => {
        grid.addEventListener("mouseover", (event) => {
            if (isMouseDown) {
                grid.style.backgroundColor = "blue";
            }
            event.stopPropagation();
        })
    });
}


const newCanvas = document.querySelector("#newCanvas");

newCanvas.addEventListener("click", (event) => {
    userInput = prompt("Enter a number to define grid size for your canvas.");
    userInput = Number(userInput);
    console.log(userInput);
    if (userInput <= 100 && Number.isInteger(userInput)) {
        gridSize = userInput;
    } else {
        alert("Invalid grid size. Please select an integer from 1 to 100.");
    }
    event.stopPropagation();
    generateCanvas();
});


document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

generateCanvas();
