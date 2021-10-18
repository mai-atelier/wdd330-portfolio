import ToDos from './ToDos'

//sending a form
function createTask(e){
    //prevent the form from being submitted
        e.preventDefault(); 
    }
    
    
    function saveToDo(task, key){
       
        task();
        key();
       
    }
    


const form = document.forms['user'];
form.addEventListener('submit',createTask, false);

