const square = document.getElementById('square');
let angle = 0;

/*
setInterval(()=>{
angle = (angle+2)%360;
square.style.transform = `rotate${angle}deg`}, 1000/60);
debugger;
*/

function rotate() {
    angle = (angle+2)%360;
    square.style.transform = `rotate${angle}deg`;
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);
cancelAnimationFrame(id);