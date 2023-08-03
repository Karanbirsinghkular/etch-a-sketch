let width = 15;
let height = 15;
let horizontalGridNum = 16;
let verticalGridNum = 16;
const container = document.querySelector(".container");

function makeGrid(width, height, horizontalGridNum, verticalGridNum){
    for(let i = 0; i < horizontalGridNum * verticalGridNum; i++){
        let div = document.createElement("div");
        div.classList.add("box");
        div.classList.add("hoveredOver");
        div.classList.add("clicked");
        div.classList.toggle("hoveredOver");
        div.classList.toggle("clicked");
        container.appendChild(div);
    }
}

makeGrid(width, height, horizontalGridNum, verticalGridNum);