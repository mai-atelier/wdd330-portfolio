
//click//
let output = 'Something Happened!';
function doSomething(){
    document.getElementById('action').innerHTML = output;
    document.getElementById('hide').style.display ='none';
}
const clickP = document.getElementById('click');
clickP.addEventListener('click', doSomething);

/*
//type of events//
function doSomething(event){
    console.log(event.type);
}

//The event target//
function doSomething(e){
console.log(e.target);
}

//finding out the place where a click happened & position of the mouse cursor//
function doSomething(e){
console.log(`screen : (${e.screenX},${e.screenY}),
page : (${e.pageX}${e.pageY}), client : ${e.screenX},${e.screenY})`)
}



//mouse events//
clickP.addEventListener('click',()=> console.log('click'));
clickP.addEventListener('mousedown',()=> console.log('down'));
clickP.addEventListener('mouseup',()=> console.log('up'));

*/

const dbclickP = document.getElementById('dbclick');
dbclickP.addEventListener('dblclick', highlight);

function highlight(e){
    e.target.classList.toggle('highlight');
}


//Mouse Events//
const mouseP = document.getElementById('mouse');
mouseP.addEventListener('mouseover', highlight);
mouseP.addEventListener('mouseout', highlight);
/*
mouseP.addEventListener('mousemove', ()=> console.log('You Moved!'));


//Keyboard Events//
//hit the key chaging the whole document//
//addEventListener('keydown', highlight);//
addEventListener('keyup', (e)=> console.log(`You pressed the ${(e.key)} character`));

addEventListener('keydown',(e)=>{
    if (e.key === 'c' && e.ctrlKey) {
        console.log('Action canceled!');
    }
});

addEventListener('click',(e)=>{
    if (e.key) {
        console.log('A shift key click!');
    }
});
*/

//Removing event listeners//
const oneP = document.getElementById('once');
oneP.addEventListener('click', remove);

function remove (e){
    console.log('Enjoy this while it lasts!');
    oneP.style.background ='pink';
    oneP.removeEventListener('click', remove);
}

//stop the default behavior//
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('Broken Link!');
});

//Event propagation//
//bubbling//

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

/*
ulElement.addEventListener('click', (e)=> console.log('Clicked on ul'));
liElement.addEventListener('click', (e)=> console.log('Clicked on li'));

//capturing//
ulElement.addEventListener('click', (e)=> console.log('Clicked on ul'), true);
liElement.addEventListener('click', (e)=> console.log('Clicked on li'), true);
//caputuring vs bubbling//
ulElement.addEventListener('click', (e)=> console.log('Clicked on ul'), false);
liElement.addEventListener('click', (e)=> console.log('Clicked on li'), false);

//stops bubbling//
liElement.addEventListener('click', (e)=>{
    console.log('clicked on li');
    e.stopPropagation();}, false);
*/

//Event DElegation//
ulElement.addEventListener('click', highlight);
