const firstDemo = document.getElementById('demo1');

//set up drawing context of two dimensions 
let context = firstDemo.getContext('2d');

//set stroke
context.fillStyle = 'aliceblue';
context.strokeStyle = 'pink';

//positioning
context.strokeRect(10,10,100,100);
context.fillRect(10,10,100,100);

//Demo2 image patterns
function drawPatterns(){
    const secondDemo = document.getElementById('demo2');
    let context = secondDemo.getContext('2d');
    context.strokeStyle = 'brown';

    //
    const img = new Image();
    img.src = 'img/pikachu-face-png-transparent-pikachu-face-images-319206.png';
    
    //create a pattern when completing a image loading
    img.onload = function(){
        const pattern = context.createPattern(img, 'repeat');
        context.fillContext = pattern;
                     
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);  
    };
}

function drawGradient() {
    let thirdDemo = document.getElementById('demo3');
    let context = thirdDemo.getContext('2d');
    context.strokeStyle = 'pink';
    const gradient = context.createLinearGradient(0, 0, 0, 200); 
    gradient.addColorStop(0, 'lightblue'); 
    gradient.addColorStop(1, 'white'); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}

function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}