let width = 15;
let height = 15;
let horizontalGridNum = 16;
let verticalGridNum = 16;
const container = document.querySelector(".container");
const randomise = document.querySelector(".randomise");
let mode = "black";

function getRandomColor(){
    let color = `rgb(${Math.random * 255}, ${Math.random * 255}, ${Math.random * 255})`;
    console.log(color);
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
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
        div.addEventListener("click", () => {div.style.backgroundColor = mode == "black" ? "black" : getRandomColor()});
        div.classList.toggle("hoveredOver");
        container.appendChild(div);
    }
}

makeGrid(width, height, horizontalGridNum, verticalGridNum);
randomise.onclick = () => {if(mode != "random")
                           {mode = "random";
                            randomise.classList.toggle("clicked");}
                           else{
                            mode = "black";
                            randomise.classList.toggle("clicked");}};