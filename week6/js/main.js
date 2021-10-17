import todo from './ToDos'

function writeToLS(key, data) { 
    key();
    data();
}

//storing data as an object


 //returning a object to a string of JSON data to store
//const saveList = JSON.parse(toDoList);







 


 
//sending a form
function createTask(e){
    //prevent the form from being submitted
        e.preventDefault(); 
    }
    
    
    function saveToDo(task, key){
       
        task();
        key();
       
    }
    




//add tasks



//toDoList == null
//}


const form = document.forms['user'];
form.addEventListener('submit', createTask, false);



//storing to the local storage
