const containerG = document.querySelector(".container")
let gridSizeInput = document.querySelector(".inputs")
function makeGrid(gridSize){

        containerG.innerHTML = ' ';
    for (i = 0; i < gridSize*gridSize; i++){
        let cell = document.createElement('div');
        cell.classList.add("cssCells");   
        containerG.appendChild(cell)
    }
    const cells = document.querySelectorAll(".cssCells")
    cells.forEach(cells =>{
        const percent = 100 / gridSize
        cells.style.flexBasis = `${percent}%` 
        cells.style.height = `${percent}%`
        cells.style.width = `${percent}%`
        cells.addEventListener("mouseover", () => {
        cells.style.backgroundColor = `black`}
    )    
    })
}


const btn = document.querySelector(".Click")
btn.addEventListener("click", () => {
    if(parseInt(gridSizeInput.value) < 100){
    const gridSize = parseInt(gridSizeInput.value)
    makeGrid(gridSize)}
    else {alert("This number is too big, choose something that is smaller than 100")
    }})


const cells = document.getElementsByClassName("cssCells")





makeGrid(2)