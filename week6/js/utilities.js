//DOM 
//<label for="">
//<input type="checkbox">
//</label>
//<button></button>

let item = document.createElement('div')
let label = document.createElement('label')
let check = document.createElement('input')
label.setAttribute('type','checkbox')
let clear = document.createElement('button')
label.appendChild(check);
item.append(label, clear);

const itemList = document.getElementById('itemList');
const output = itemList.appendChild(item);

export default output;


//@return {element} The matching element or null if not found /
function qs(selector) { 
document.querySelector('allTask')

}
/*
add a touchend event listener to an element for mobile 
with a click event fallback for desktops @param {string} elementSelector 
The selector for the element to attach the listener to
 @param {function} callback The callback function to run
*/
function onTouch(elementSelector, callback) {
   elementSelector.addEventListener('click', (e)=> {
       callback();
   })
 };