let plane = new Plane(80,80)
let bullet = new Bullet(20,30)
let bullets = []
plane.draw()
function play(){
    plane.move()
    bullet.move()
}
play()
// window.addEventListener('mousemove',(e))



// setInterval(play, 10)
// requestAnimationFrame(play, 100)