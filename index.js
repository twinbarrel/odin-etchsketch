function createGrid(width) {
    let container = document.querySelector(".container");
    for (let i=0;i<width;i++) {
        let row = document.createElement("div");
        row.classList.add('.row');
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
    square.classList.add('.cell');
    return square;
}

createGrid(16);