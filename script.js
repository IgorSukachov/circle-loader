let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

const coefficient = 2 * Math.PI / 100
let start = 0

function draw () {
    
    let randomColor = getColor(start)

    ctx.clearRect(0, 0, 250, 250)
    
    ctx.beginPath() 
    ctx.arc(125, 125, 100, 0, start * coefficient, false) 
    ctx.strokeStyle = randomColor
    ctx.lineCap = 'round'
    ctx.lineWidth = 20
    ctx.stroke()
    ctx.closePath()
    
    ctx.beginPath()
    ctx.font = 'bold 70px Arial'
    ctx.fillStyle = randomColor
    ctx.textAlign = 'center'
    ctx.fillText(start+'%', 125 , 145)
    ctx.closePath()

    start++
    
    let timeout
    const finalPath = 100
    if (start <= finalPath) {
        timeout = setTimeout(draw, 10)
    } else {
        clearTimeout(timeout)
    }
}

draw()

function getColor(ourCounter) {
    g = ourCounter * 255 / 100
    r = 255/100 - g
    b = 0 + g - r
    let color = `rgb(${r}, ${g}, ${b})`
    return color
}