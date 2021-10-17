import output from './utilities.js';
//add a todo class to create an object
class todo {
    constructor( buildList, savingKey){
//set a variable with the element our todo list will be built in
this.buildList = buildList;

//the key we will use to read/write from localStorage
this.savingKey = savingKey;
    }
}
    todoList = null;
    export default todo; 


// build a todo object
const toDo = {};
const toDoList = [toDo];

//A todo should look like this: { id : timestamp, content: string, completed: bool }
function saveTodo(task, key){ 
task();
key();
}

//@param {string} task The text of the task to be saved.
function task() {

//create values
    
    //timestamp 
    const date = new Date();
    const timestamp = date.toString()
  
    
    //user input
    const input = document.getElementById('newItem').value
    const string = 'hi';
    
    //if user input was null
    if ( input == null){
        input = '';
    }
    
    //checkbox checked
    toDo.completed = false;
    
//create property
toDo.id = timestamp;
toDo.content = string;


}


//@param {string} key The key under which the value is stored under in LS 
function key() {
  
}

//if there is any task yet
if (toDoList == null){
    toDoList = [];
}

//add it to the todoList
const addList = toDoList.push(newItem);

//save the new list to local storage
//save to a local storge
const savingKey = localStorage.setItem( 'allTask', addList )



//get Todo 
    //In the Todos.js module, but not in the Todos class create the following function
    /* check the contents of todoList, a local variable containing a list of ToDos.
     If it is null then pull the list of todos from localstorage, update the local variable, and return it
    @param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects
    */
    function getTodos(key) { 
        localStorage.getItem( 'allTask', addList )
    }