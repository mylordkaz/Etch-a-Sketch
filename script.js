const container = document.querySelector('.container')
const grid = document.querySelector('.grid')
const btnreset = document.querySelector('.reset')
const apply = document.querySelector('.apply')

let gridSize = document.querySelector('input')
let gridValue = document.querySelector('.gridsize')
let squareSize = 8 

createGrid(squareSize)

function createDivs(size){
    
    const div = document.createElement('div')
    div.classList.add('box')
    div.style.width = `${size}px`
    div.style.height = `${size}px`
    return div
   }

function createGrid(gridSize){

    for (let i= 0; i < gridSize; i++){
        for (let j=0; j < gridSize; j++){
          grid.appendChild(createDivs(grid.clientWidth/gridSize))  
        }
    }
}

grid.addEventListener('mouseover', function(e){
    if (e.target.matches('.box')){
        e.target.classList.add('boxcolor')
    }
})

function reset(){
    while(grid.firstChild){
        grid.removeChild(grid.lastChild)
    }
    createGrid(squareSize)
}

btnreset.addEventListener('click', reset)

gridSize.addEventListener('input', function(e){
    squareSize = e.target.value
    gridValue.textContent = `${squareSize} x ${squareSize}`
})

apply.addEventListener('click',function(){
    reset()
})