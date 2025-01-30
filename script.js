let container = document.querySelector("#container");
let boxAmount = 16;
let changeGrids = document.querySelector(".button");

const createGrids = () => {
    for (let i = 0; i < boxAmount; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);

        box.addEventListener("mouseover", () => {
            box.classList.add("hovered");
        })

        box.addEventListener("mouseleave", () => {
            box.classList.remove("hovered");
        })
    }
}

createGrids();

changeGrids.addEventListener("click", () => {
    container.innerHTML = ""

    do {
        boxAmount = Number(prompt("How many boxes do you want? Please write a number between 1 and 100"));
    } while (boxAmount < 1 || boxAmount > 100 || !Number.isInteger(boxAmount));
    
    createGrids();
})
