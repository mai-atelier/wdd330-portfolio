import {} from "./ToDos.js";
export default class saveLS {
//get items from ls
 readFromLS(key) {
    //read a value from local storage
    let storedList = localStorage.getItem('key')
    if( storedList == null){
        storedList = []
    }
    //JSON.parse(storedList);
}

//saving
writeToLS(key, data){
//write an array of objects to local storage under the provided key @param {string} key
let writeList = JSON.stringify(toDoList)
localStorage.setItem('key', writeList)

console.log(writeList);
}
}
