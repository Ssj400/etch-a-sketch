let container = document.querySelector("#container");
let boxAmount = 9;
let changeGrids = document.querySelector(".button");
let size = `55.5`;

const paintRed = (element) => {
    element.addEventListener("mouseover", () => {
            element.classList.add("hovered");
            element.style.background = `rgb(${Math.floor (Math.random() * 255)}, ${Math.floor (Math.random() * 255)}, ${Math.floor (Math.random() * 255)})`
    });
}

const createGrids = () => {
    for (let i = 0; i < (boxAmount ** 2); i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        box.style.width = `${size}px`;


        paintRed(box);

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
