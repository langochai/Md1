let grid = 16   //size of one grid in canvas field

let snake = {
    x:160,
    y:160,
    dx:grid,
    dy:0,
    cells:[], //snake's body is determined by an array of cells
    maxCells:4 //snake's default length is 4
}

let apple = {
    x:192,
    y:192
}