import ToDos from './ToDos.js';
import saveLS from './ls.js';
//1.Show a list of tasks

//2.Add a new tasks
//user input
const form = document.forms['user'];

//sending a form
form.addEventListener('submit', ToDos.addTodo, false);
 //prevent the form submitting

    //create an empty object   
    const toDo = {} 
     //add it to the todoList
    const toDoList = [toDo];
        
        const markItem = document.querySelectorAll('.mark');
        markItem.forEach(function(e){
        e.addEventListener('click', completeTodos );
        });

            //bind addtodo?
        //used function(e)
        //seems not working 
        //toDoList = null;?

        //css .active
        const cssbtn = document.querySelectorAll('.button')
        cssbtn.forEach(function(e){
        e.addEventListener('click', function active(i){
            i.target.classList.toggle('active')});
        });

        const rmbtn = document.getElementById('removebtn')
        rmbtn.addEventListener('click', ToDos.removeTodos)

        
       