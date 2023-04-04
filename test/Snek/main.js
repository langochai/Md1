let canvas = document.getElementById('game')
let ctx = canvas.getContext('2d')
let scoreLpDisplay = document.getElementById('score')
let nom = document.getElementById('nom')

function getRandomInt(min, max) {                      //canvas is 400px*400px, 1 grid is 16px*16px => 25 grids
    return Math.floor(Math.random() * (max - min))  // this function is for apple's random position
}

let count = 1           // this variable is responsible for game's fps/speed
let loopcondition = 10  // this variable is responsible for game's fps/speed
let score = 0           // this variable is responsible for counting game's score
let lp = 3              // this variable is responsible for life point

function main(){
    if(lp>0) {          //game only runs when life point is not zero
        requestAnimationFrame(main)
    } else {
        ctx.font = "30px Arial";
        ctx.fillStyle="black"
        ctx.fillText("Game over",128,205);
    }
    if (count++<loopcondition){    // 10 frames = 1 loop
        return
    }

    count = 1 //set count back to 1 so the loop stays the same everytime
    ctx.clearRect(0, 0, canvas.width, canvas.height) //clear canvas to redraw everything
    snake.x += snake.dx // snake moves dx each loop
    snake.y += snake.dy // snake moves dy each loop


    //when snake touches the edge => reappear out of the opposite edge
    if (snake.x < 0){
        snake.x = canvas.width - grid   //when touch left edge
    } else if (snake.x >= canvas.width){
        snake.x = 0                     //when touch right edge
    }
    if (snake.y < 0){
        snake.y = canvas.height - grid  //when touch upper edge
    } else if (snake.y >= canvas.height){
        snake.y = 0                     //when touch lower edge
    }


    //make snake move (add grid at the head)
    snake.cells.unshift({x:snake.x,y:snake.y})
    //remove 1 grid of the tail because we just added 1 grid at the head
    if (snake.cells.length > snake.maxCells){
        snake.cells.pop()
    }


    //display apple
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.arc(apple.x+(grid/2),apple.y+(grid/2),grid/2,0,2*Math.PI)
    ctx.fill()
    ctx.closePath()


    //display snake
    ctx.fillStyle = 'blue'
    snake.cells.forEach(function (cell) { //for each element of array cells we draw a rectangle
        ctx.fillRect(cell.x, cell.y, grid - 1, grid - 1)

        //if snake eats apple => increase snake's length, change position of apple, increase score and play sound
        if (snake.x === apple.x && snake.y === apple.y){
            snake.maxCells++
            apple.x = getRandomInt(0,25) * grid
            apple.y = getRandomInt(0,25) * grid
            ++score
            nom.play()
        }

        //when snake bites its own body
        for (let i = 1; i <snake.cells.length; i++) {
            if (snake.x === snake.cells[i].x && snake.y === snake.cells[i].y){
                //reset snake position to default
                snake.x = 160
                snake.y = 160
                snake.cells = []
                snake.maxCells = 4
                snake.dx = grid
                snake.dy = 0

                // draw apple at a random position
                apple.x = getRandomInt(0, 25) * grid
                apple.y = getRandomInt(0, 25) * grid

                //life point decreases
                lp--

                //these codes are just for testing
                // alert(`skill issue!!!`)
                // location.reload() // refresh the page
            }
        }
    })


    //display score and life point
    scoreLpDisplay.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp SCORE : "+score+"&nbsp LIFE : "+lp + "&nbsp&nbsp&nbsp"
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft' && snake.dx === 0) {
        snake.dx = -grid
        snake.dy = 0
    } else if (e.key === "ArrowUp" && snake.dy === 0) {
        snake.dy = -grid
        snake.dx = 0
    } else if (e.key === "ArrowRight" && snake.dx === 0) {
        snake.dx = grid
        snake.dy = 0
    } else if (e.key === "ArrowDown" && snake.dy === 0) {
        snake.dy = grid
        snake.dx = 0
    } else if (e.key === "i" && snake.dy === 0){  //pressing "i" will increase speed of the game
        if(loopcondition>1) {                     // making loopcondition cannot go under too far
            loopcondition--
        }
    } else if (e.key === "o" && snake.dy === 0){  //pressing "o" will decrease speed of the game
        if(loopcondition<20) {                    //making loopcondition cannot go up too far
            loopcondition++
        }
    }
})

requestAnimationFrame(main)