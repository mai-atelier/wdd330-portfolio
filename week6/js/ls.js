import toDolist from "./ToDos";


function readFromLS(key) { 

//read a value from local storage
const key = localStorage.getItem('allTask')
 //parse it as JSON storedList
const allTask = JSON.parse(key)


// @return {array} The value as an array of objects 
return writeToLS(allTask);
}

function writeToLS(key, data) { 
//write an array of objects to local storage under the key
//storing data as an object
const toDo = {};
const toDoList = [toDo];

//@param {array} data The information to be stored as an array of objects. Must be serialized.
//returning a object to a string of JSON data to store
const data = JSON.stringify(key)
localStorage.setItem('allTask', data)
}







