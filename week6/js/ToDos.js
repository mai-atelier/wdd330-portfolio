import taskContainer from './utilities.js';
import saveLS from './ls.js';
 
//add a todo class to create an object
export default class ToDos {
    constructor( listTodos, key){
//set a variable with the element our todo list will be built in
this.listTodos = listTodos;

//the key we will use to read/write from localStorage
this.key = key;
    }

    //Add a method to the Todos class called addTodo. 
    addTodo(e){
        e.preventDefault();
        //It should grab the input in the html where users enter the text of the task.
        const newItem = document.getElementById('newTask').value
       
        // then send that along with the key to a SaveTodo() function. 
        saveTodo();
        readFromLS();
        writeToLS();

        //Update
        //get the current list array
       //add it to the todoList
        const addNewItem = toDoList.unshift(newItem)
        const setList = JSON.stringify(addNewItem)
        localStorage.setItem('key',setList)
        console.log(setList);

        //display with the current list of tasks.
        listTodos();
        }

    //Add a method to the Todos class called listTodos().
    //It should use the renderTodoList function to output our todo list when called.
    //It should get called when a todo is added, or removed, and when the Todos class is instantiated.
 
    listTodos(){
        renderTodoList();
    }

    completeTodos(){

        const complete = toDo.completed;
        complete = [...this.toDo].filter(box => box.checked).map(box => box.value);
        console.log(toDo.completed);
    }
    
     removeTodos(){
        listTodos();
        const ul = document.getElementById('itemList')
        const li = document.querySelector('#itemList li')

        ul.removeChild(li.checkbox.checked == true);
        //toDolist.map(toDo.completed !== false)
        //get rid of 
        const remainItems = toDolist.splice(toDo.completed !== false)
        const remainList = JSON.stringify(remainItems)
        localStorage.setItem('key',remainList);
        }

          

     filterTodos(){
        const completebtn = document.getElementById('done')
        completebtn.addEventListener('click', finish)
       
        function finish(){
            const completeItem = toDolist.filter(e => checkbox.checked !== false);
            const completeList = JSON.stringify(completeItem)
            localStorage.setItem('key',completeList);
            listTodos();
        }

        const activebtn = document.getElementById('active')
        activebtn.addEventListener('click', happen)
        function happen(){         

            const activeItem = toDolist.filter(e => checkbox.checked == false);
            const activeList = JSON.stringify(activeItem)
            localStorage.setItem('key', activeList);
            listTodos();
        }
        //const bool = toDo.completed;
        //bool = [...this.toDo].filter(box => box.checked).map(box => box.value);
        //console.log(bool);
    }
}


//complete task
function completeTodos(){
            markItem.checkbox.checked = true;
            toDo.completed = true;
            //const isChecked = todo.completed ? false : true;
       }

//let toDoList = null;


//2-1. storing user input
function saveTodo(task, key){ 
    //@param {string} key: The key under which the value is stored under in LS.
    //@param {string} task: The text of the task to be saved.
    //save as an object
    //build a todo object; 
    //A todo should look like this: { id : timestamp, content: string, completed: bool }

        //create values
            //timestamp 
            const date = new Date();
            const timestamp = date.toString()
            
        //create property
            toDo.id = timestamp;
            toDo.content = form.newTask.value;
            toDo.completed = false;//not complete yet, replace it after checked   
            console.log(toDo);

 //save the new list to local storage.
    //convert into JSON to store 
    const saveList = JSON.stringify(toDoList)
    localStorage.setItem('key', saveList)
    console.log(saveList);
    }


//updating todoList
    //@param {string} key: The key under which the value is stored under in LS
    //@return {array}: The value as an array of objects
    function getTodos(key) {
        // check the contents of todoList, a local variable containing a list of ToDos.
        const exist = this.content(key).includes(userInput);

       // If it is null 
       if (exist == null){
       //pull the list of todos from localstorage
       readFromLS(key);
       //update the local variable
       //add newItem to the storedList
       const addList = key.push(userInput)
       // return it
       console.log(addList);
       return addList;
       }
    }


    