const url = "https://swapi.dev/api/people"
fetch(url)
.then((response)=>response.json())
.then((jsObject)=>{ 
    console.log(jsObject)
    for (let i=0; i<83; i++){
    const people = jsObject.results[i].name;
    const ul = document.querySelector('.list');
    ul.innerHTML = `<li>${people}</li>`;
    }
});
