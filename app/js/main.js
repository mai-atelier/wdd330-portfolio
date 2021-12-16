/*
<utilities.js>
1. Input data
fetch API 
catch errors
response JSON

create a promise
.then(res => res.json()) //get data from the response object
.then(jsonRes => console.log(jsonRes))
.catch(error => console.log(error));

       return fetch('./js/pokedex.json')
       .then(function(response) {
           if(!response.ok) {
               throw Error(response.statusText)
           }
           else {
               return response.json();
           }
       })
       .then((jsObject)=>{ 
           console.log(jsObject);
       })
       .catch(function(error) {
       console.log(error);
       });
       }
   */

       let pokeJS = [];

       //async and await 
       async function getJSON(){
              try {
                  const response = await fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
                   //reject
                  if (!response.ok) {
                    throw Error(response.statusText);
                  } 
                  //resolve (success)
                  else {
                    //await untill get promise
                    //response in json
                    pokeJS = await response.json();
                     //console.log(pokeJS)
                     
                     
                     renderPokeList(pokeJS)
                     //output
                  } 
               }
                //catch other errors
                catch (reason) {
                  console.log(reason.message);
                }
               }
                     
               getJSON()

              function renderPokeList(pokeJS){
                let div = document.querySelector('.poke-list') 
                let pokedex = document.createElement('div')
                pokedex.classList.add('render-list')


                pokeJS.forEach(pokemon => {
                  createCard(pokemon) })

                //pass pokemon to reuse
                //create a Pokemon card with DOM

                function  createCard(pokemon){
                  //const pokelist = document.createElement('div')
                  const pokeData = document.createElement('div')

                  //pokelist.innerHTML = pokemon.id;
                 //write card content  
                 //imgHolder (id & img)
                 //set Id to match img

                 let generateId = pokemon.id
                 if ( pokemon.id < 10) {
                  generateId  = `00${pokemon.id}`;
                }
                else if (pokemon.id < 100) {
                  generateId  = `0${pokemon.id}`;
                }
                else {
                  generateId = `${pokemon.id}`;
                }
                //console.log(generateId)
      
                const imgUrl = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${generateId}.png`

                let types = pokemon.type;
                let ul = document.createElement('ul')
                ul.classList.add('type')

                types.forEach(type =>{
                let pokeType =  document.createElement("li");
                pokeType.textContent = type;
                ul.appendChild(pokeType)
                 })
                 //console.log(ul)

                 pokeData.setAttribute('data-set', generateId)
                 pokeData.classList.add('card')
                 pokeData.innerHTML = `              
                  <div class="card-info">
                    <div class="poke-img">
                      <img src="${imgUrl}">
                    </div>
                `

                const pokeInfo =  document.createElement('div');
                pokeInfo.classList.add('poke-info')
                pokeInfo.innerHTML = ` <h3>${pokemon.name.english}</h3> `
                pokeInfo.appendChild(ul)
  
                const like =  document.createElement('div');
                like.classList.add('poke-ball')
                //add like
                like.addEventListener('click', ()=>{like.classList.toggle('like')}, false);
                like.addEventListener('click', ()=>{pokeData.classList.toggle('fav')}, false);

                like.innerHTML =`
                  <div class="ball">
                         <div class="ball-center"></div>
                     </div>
                 </div>
                 `      
                 pokeData.append(pokeInfo, like)
                 div.append(pokeData)
                }
                 console.log(div)
                 div.appendChild(pokedex)
                 searchItem(pokeJS)
              }
              
              //search functio
              
function searchItem(pokeJS) {
            const searchString = document.getElementById('searchInput')
            //get search item
            searchString.addEventListener('keyup', (e) => {
            //input string
            const keyword = e.target.value;
            //take out the spaces
            keyword.trim();
            console.log(keyword)

//filter pokeList
//return value.name.japanese === keyword;
let results = pokeJS.filter(filtered =>{
  if　(searchString == null)　{
 return null;
  }
  else　{
    return filtered.name.japanese.match(keyword)
  }
})
//renderPokeList(result)
console.log( results )
const resultlist = document.querySelector('.search-result')
let pokeList = document.querySelector('.poke-list')
let card = document.createElement('div')
card.classList.add()
results.forEach(result =>{
  
  //const id = document.createElement('div')
  const findData = document.createElement('div')

                 let generateId = result.id;
                 //id.innerHTML = generateId;
                console.log(generateId)


                 if ( generateId < 10) {
                  generateId  = `00${result.id}`;
                }
                else if (generateId  < 100) {
                  generateId  = `0${result.id}`;
                }
                else {
                  generateId = `${result.id}`;
                }
      
                const imgUrl = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${generateId}.png`

                let types = result.type;
                let ul = document.createElement('ul')
                ul.classList.add('type')

                types.forEach(type =>{
                let li =  document.createElement("li");
                li.textContent = type;
                ul.appendChild(li)
                 })
                 //console.log(ul)

                 findData.setAttribute('data-set', generateId)
                 findData.classList.add('card')
                 findData.innerHTML = `              
                  <div class="card-info">
                    <div class="poke-img">
                      <img src="${imgUrl}">
                    </div>
                `

                const info =  document.createElement('div');
                info.classList.add('poke-info')
                info.innerHTML = ` <h3>${result.name.english}</h3> `
                info.appendChild(ul)
  
                const addLike =  document.createElement('div');
                addLike.classList.add('poke-ball')
                addLike.innerHTML =`
                  <div class="ball">
                         <div class="ball-center"></div>
                     </div>
                 </div>
                 </div>
                 `      
                 card.append(findData)
                 findData.append(info, addLike)
                 console.log(card)
})
//pokeList.style.display = 'none'
pokeList.innerHTML = null;
resultlist.append(card)
})
}

     //search-bar styling
     const searchIcon = document.querySelector('.icon')
     const searchBar = document.querySelector('.search')
      
      searchIcon.addEventListener('click', ()=>{
      searchBar.classList.toggle('active')}, false);
         
       
       /*
                 listItem.setAttribute('data-set', generateId );

                  const listItem = document.createElement('div')       
                   const pokeData = document.createElement('div')
                           const personal = document.createElement('div')
                           const imgHolder = document.createElement('div')
                           const img = document.createElement('img')
                           imgHolder.appendChild(img)
                           
                         const likebtn = document.createElement('div')
                         //likebtn detail
                       
       
                         listItem.classList.add('card')
                         pokeData.classList.add('card-info')
                         imgHolder.classList.add('poke-img')
                         personal.classList.add('poke-info')
                         likebtn.classList.add('poke-ball')
         
                 pokeData.append(imgHolder, personal)
                 listItem.append(pokeData, likebtn)
                 pokelist.append(listItem);

                 //personal (name & types)
                 writeData(pokemon, personal)
                 */
             
               /*
               //function store items
               //if includes .like store to the collection
               function favorite(pokemon) {
                 const favPokemon = document.createElement('div');
                 const favPokemon = document.querySelectorAll('.like');
                 favList.innerHTML = `<div>img</div>
                 <p>${pokemon.name}</p>
                 <button class="clear"></button>`
       
               }
       
               //save pokemon to ls?
       
       */
       
       /*                         
                 //loop for the array types
              
                 loop1
                       for (let i = 0; i<pokemon.type.length; i++) {
                         let pokeType =  document.createElement("li");
                         pokeType.innerHTML = pokemon.type[i]
                       }
                 loop2
                       for (const type of types) {
                       let pokeType =  document.createElement("li");
                       pokeType.innerHTML = type;
                       ul.append(pokeType)
                       }      
       */
       
       
       
       
       
       /* 
       
//events
//display as a collection
const collection = document.querySelector('.in-ball-icon')
collection.addEventListener('click', saveLikes, false);

function saveLikes() {
  let myFav = [];
  const board = document.querySelector('.collection')
  myFav = document.querySelectorAll('fav')
 
    for (let i = 0; i<myFav.length; i++) {
      myFav.parseJSON()  
  };
  console.log(myFav)
}

//call searchquery
searchBar.addEventListener('click', ()=>searchItem(pokeJS))



       
       
       
       
       Requirements
       1) Calling an external API to get data
       url =''
       4) use fetch, and promises and async to exercise lots of javascript items.
       fetch 
       
       2) Displaying the data and doing some form information and validation, like a search form.
       display the data
       create a search form
       
       
       3) Manipulate with css and html and json
       create a card with DOM
       add next and prev buttons
       add likes
       
       
       5) Use localstorage if  you can and need to.  (This is not a hard requirement)
       store the favorite Polkemon ollection 
       
       
       Display data
       1 sort by name
       2 type
       
       
       card view 
       
       ul li:hover { display picture }
       modal (picture + info)
       
       prev / next btn
       close btn
       */