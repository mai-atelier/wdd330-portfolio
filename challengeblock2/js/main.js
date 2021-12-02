/*
0. Entry app

utilities.js
1. Input data
fetch API 
catch errors
response JSON



const url = 'http://bloowatch.org/developers/json/species'
function getJSON(url){
return fetch(url)
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
getJSON();








Display data
sort by location
sort by level

card view 

ul li:hover { display picture }
modal (picture + info)

prev / next btn
close btn



*/
const url ='http://bloowatch.org/developers/json/species'
fetch(url,
    //create a header
 {  method: 'GET',
    mode: 'cors',
    headers: { Origin:'http://127.0.0.1:5502'}
    })
.then(res => res.json()) //get data from the response object
.then(jsonRes => console.log(jsonRes))
.catch(error => console.log(error));