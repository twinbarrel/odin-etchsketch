function createGrid(width) {
    let container = document.querySelector(".container");
    for (let i=0;i<width;i++) {
        let row = document.createElement("div");
        row.classList.add('row');
        createRowCells(row, width);
        container.appendChild(row); 
    }
}

function createRowCells(row, width) {
    for (let i=0; i<width; i++) {
        let cell = createCell();
        row.appendChild(cell);
    }
}

function createCell() {
    let square = document.createElement("div");
    square.classList.add('cell');
    return square;
}

function generateRGB() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${blue},${green})`;
}

createGrid(16);

let container = document.querySelector(".container");
container.addEventListener("mouseover", (event)=> {
    let target = event.target;
    if (target.classList.contains('cell')) {
        // target.classList.add('full');
        let color = generateRGB();
        target.style.backgroundColor = color;
    }
})

container.addEventListener("mouseout", (event)=> {
    let target = event.target;
    if (target.classList.contains('cell')) {
        // target.classList.remove('full');
        target.style.backgroundColor = 'white';
    }
})