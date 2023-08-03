let width = 15;
let height = 15;
let horizontalGridNum = 16;
let verticalGridNum = 16;
const container = document.querySelector(".container");

function hover(div){
    div.classList.toggle("hoveredOver");
}

function makeGrid(width, height, horizontalGridNum, verticalGridNum){
    for(let i = 0; i < horizontalGridNum * verticalGridNum; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        div.classList.add("hoveredOver");
        div.addEventListener("mouseenter", () => {div.classList.toggle("hoveredOver")
                                                  div.style.zIndex = 1;});
        div.addEventListener("mouseleave", () => {div.classList.toggle("hoveredOver")
                                                  div.style.zIndex = 0;});
        div.classList.add("clicked");
        div.classList.toggle("hoveredOver");
        div.classList.toggle("clicked");
        container.appendChild(div);
    }
}

makeGrid(width, height, horizontalGridNum, verticalGridNum);