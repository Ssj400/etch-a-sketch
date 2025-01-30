let container = document.querySelector("#container");
let changeGrids = document.querySelector(".button");
let normal = document.querySelector(".normal")
let random = document.querySelector(".random")
let erase = document.querySelector(".erase")
let reset = document.querySelector("#reset")
let boxAmount = 9;
let size = `55.5`;
let box;


let buttonActivated;
normal.classList.add("selected");

random.addEventListener("click", () => {
    buttonActivated = 1;
    random.classList.add("selected");
    normal.classList.remove("selected");
    erase.classList.remove("selected");
});

normal.addEventListener("click", () => {
    buttonActivated = 0;
    normal.classList.add("selected")
    random.classList.remove("selected");
    erase.classList.remove("selected");
});

erase.addEventListener("click", () => {
    buttonActivated = -1;
    erase.classList.add("selected");
    normal.classList.remove("selected");
    random.classList.remove("selected");
});


const paint = (element) => {
    element.addEventListener("mouseover", () => {
        let paintColor;
        if (buttonActivated === 1) {
            paintColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        } else if (buttonActivated === 0){
            paintColor = "white";
        } else if (buttonActivated === -1) {
            paintColor = "black";
        }

        element.style.background = paintColor;
    });
}

let resetAll = (element) => {
    reset.addEventListener("click", () => {
        element.style.background = 'black';
    })
}




const createGrids = () => {
    for (let i = 0; i < (boxAmount ** 2); i++) {
        box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        box.style.width = `${size}px`;

        paint(box);
        resetAll(box);

    }
}

createGrids();

changeGrids.addEventListener("click", () => {
    container.innerHTML = ""

    do {
        boxAmount = Number(prompt("How many boxes do you want? Please write a number between 1 and 100"));
        size = 500 / boxAmount
    } while (boxAmount < 1 || boxAmount > 100 || !Number.isInteger(boxAmount));

    createGrids();
})

