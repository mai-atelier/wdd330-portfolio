//DOM 
//<label for="">
//<input type="checkbox">
//</label>
//<button></button>

export default class taskContainer{
  renderTodoList(list, element) { 
    //@param {array} list: The list of tasks to render to HTML.
    //@param {element} element: The DOM element to insert our list elements into.
    //foreach todo in list, build a li element for the todo.
    
    toDoList.innerHTML = null

    //for (const toDo of toDoList) {
    let li = document.createElement('li')
    li.innerHTML += `<label for="${toDo.id}" class="mark">
    <input id="${toDo.id}" type="checkbox" name='task'>
    ${form.newTask.value}
    </label>
    <button id="removebtn">×</button>`
    
    // append it to element.
    const ul = document.querySelector('.itemList')
    const setItem = ul.appendChild(li);
    
    console.log(setItem);
    
    }
}

//????
function qs(selector){ 
  //do a querySelector lookup @param {string} selector: The selector passed to querySelector.
 todos = document.querySelector('input[name=task]');
  
  //@return {element}: The matching element or null if not found /
  if (todos == null){
    todos = [];
  }
  }
 
/*
add a touchend event listener
 to an element for mobile 

with a click event fallback for desktops @param {string} elementSelector: The selector for the element to attach the listener to
 @param {function} callback The callback function to run
*/
function onTouch(elementSelector, callback) {

   elementSelector.addEventListener('click', (e)=> {
       callback();
   })


   elementSelector.addEventListener('touchend', (e)=> {
    callback();
})
 };