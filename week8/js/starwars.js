let url = "https://swapi.dev/api/people"
fetch(url)
.then((response)=>response.json())
.then((jsObject)=>{ 
    console.log(jsObject);

    for (let i=0; i<10; i++){
        const people = jsObject.results[i].name;
        const ul = document.querySelector('.list');
        const li = document.createElement('li');
        ul.append(li);
        li.textContent = people;
        }
});

        const button = document.getElementById('button')
        const a = document.createElement('a')
        a.innerHTML = 'NEXT'
        button.appendChild(a)

        const nextURL = jsObject.next


/*
const prev = document.getElementById('prev')

prev.addEventListener('click',renderList);
function renderList(){
    if (jsObject.previous=null){
        prev.removeEventListener;
    }

}
*/

