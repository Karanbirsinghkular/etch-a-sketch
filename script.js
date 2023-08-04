let width = 30;
let height = 30;
let horizontalGridNum = 16;
let verticalGridNum = 16;
const container = document.querySelector(".container");
const randomise = document.querySelector("#randomise");
const erase = document.querySelector("#erase");
const changeGridSize = document.querySelector("#changeGridSize");
let mode = "black";

function getRandomColor(){
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
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
        div.addEventListener("click", () => 
        {
            let clicked = document.querySelector(".clicked");
            if(clicked == null){
                mode = "black";
            }
            else{
                mode = clicked.getAttribute("id");
            }
            if(mode == "randomise"){
                console.log(getRandomColor());
                div.style.backgroundColor = getRandomColor();
            }
            else if(mode == "erase"){
                div.style.backgroundColor = "white";
            }
            else{
                div.style.backgroundColor = "black";
            }
        });
        div.classList.toggle("hoveredOver");
        container.appendChild(div);
    }
}

makeGrid(width, height, horizontalGridNum, verticalGridNum);
randomise.onclick = () => {let isClicked = [...randomise.classList].includes("clicked");
                            if(!isClicked)
                           {
                            let clickedList = document.querySelectorAll(".clicked");
                            clickedList.forEach((element) => element.classList.remove("clicked"));
                            randomise.classList.add("clicked");}
                           else{
                            randomise.classList.remove("clicked");}};


erase.onclick = () => {let isClicked = [...erase.classList].includes("clicked");
                        if(!isClicked)
                            {
                             let clickedList = document.querySelectorAll(".clicked");
                             clickedList.forEach((element) => element.classList.remove("clicked"));
                             erase.classList.add("clicked");}
                        else{
                            erase.classList.remove("clicked");}};

changeGridSize.onclick = () =>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    let gridWidth = prompt();
    container.style.width = `${gridWidth * width}px`;
    makeGrid(width, height, gridWidth, prompt());
};
                            