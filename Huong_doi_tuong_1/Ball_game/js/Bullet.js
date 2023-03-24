class Bullet{
    constructor(width,height) {
        this.x = 200
        this.y = 400
        this.width = width
        this.height = height
        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
    }
    draw(){
        this.ctx.beginPath()
        this.ctx.rect(this.x,this.y,this.width,this.height)
        this.ctx.fill()
    }
    move(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.y -= 5
        this.draw()
    }
}