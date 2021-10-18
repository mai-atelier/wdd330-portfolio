import output from './utilities.js';
import {key, data, toDo, toDoList} from './ls.js';

//add a todo class to create an object
export default class ToDos {
    constructor( buildList, key){
//set a variable with the element our todo list will be built in
this.buildList = buildList;

//the key we will use to read/write from localStorage
this.key = key;
    }

    addTodo(){
    //user input
    const input = document.getElementById('newItem').value
    return saveTodo();
    //add it to the todoList
    const addList = toDoList.push(input);
    }
    listTodos(){

    }
}

todoList = null;


        

//A todo should look like this: { id : timestamp, content: string, completed: bool }
function saveTodo(data, key){ 

//@param {string} task: The text of the task to be saved.


//create values
    //timestamp 
    const date = new Date();
    const timestamp = date.toString()
  

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

//get Todo 
    //In the Todos.js module, but not in the Todos class create the following function
    /* check the contents of todoList, a local variable containing a list of ToDos.
     If it is null then pull the list of todos from localstorage, update the local variable, and return it
    @param {string} key The key under which the value is stored under in LS @return {array} The value as an array of objects
    */
    function getTodos(key) { 
        localStorage.getItem( 'allTask', addList )


//save the new list to local storage
//save to a local storge
const savingKey = localStorage.setItem( 'allTask', addList )

    }

    