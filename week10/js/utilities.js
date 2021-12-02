/*At this point we have learned a lot about coding with Javascript. Let's make a simple earthquake watch app to apply what we have learned.        

Activity
 getJSON function
We will be fetching data from an external API using fetch. 
All of the data we will be requesting will be in the JSON format, so let's write a helper function to automatically convert the response to that, and add a bit of extra error checking as well.

Open the utilities.js file and create a function called getJSON(url). 
Add the code to make your function do a simple fetch request using the url argument that should get passed in, and return the response in JSON.

getJSON(url){}
const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

You can use https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02' to test your function with. 
Check your function against mine once you have it working.
We will be using earthquake data from the USGS. 
They have an open api that is easy to use. You can find the documentation here: USGS Earthquake Catalog


Simple Fetch
function getJSON(url){
return fetch(url)
.then (funciton(response){
return sponse.json();
})
}

This is a good start, but it is a bit brittle. Let's add some error checking. 
You should have used a .then() method call to process the response of your request.

There is another method we can use as well: .catch(). We can use this to do some checking on how successful our fetch was. 
We can just chain this method after the end of the .then() call. Like this:

.catch(function(error) {
    console.log(error);
});
        
This is a very simple error handler. Normally you would do something about the error, instead of just reporting it. T
he problem with this however, is that Fetch was designed to treat any request that communicates successfully with the intended destination server as successful, no matter what the response is! 
So we need to add more checking to make sure we actually got the results we were looking for before we try to use them. 
Luckily the Fetch response includes an ok flag as part of the response. 
If that is true, then we get got something more than just a wave from the server. 
Below is an example of how we might check against ok


function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
        
If you are uncomfortable with the throw line above...go back and revisit the reading in the text about Bugs and Errors.*/

export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
                //display the HTTP status code
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}


/*
02 Geolocation services
We would like our app to be able to return earthquakes within a certain radius of our current location. 
In order to do that we will need to tap into the Geolocation API. 
Luckily it is pretty easy to use. 
Make sure to read through the linked page above for more details, but I'll provide this function. 
One thing to note is that the Geolocation API does not return a Promise like Fetch does. 
It would be nice if it did so we could take advantage of the newer promise based features of ES2015 and ES2106. 
Below you will find a simple "Promisefied" version of the method to return the current location of the user. Add this to your utilities.js file.
*/

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
 
/*
 03Export the utilities
We would like our utilities.js collection to be a reusable module. 
So we need to export our helper functions to be used elsewhere. 
Add an export keyword before each of our functions to export them.

export function getJSON(url) { ... }
export const getLocation = function(options){ ... }
:*/

        
/*
//06 Refactor
/*Refactoring is a common step in development. 
It is done with working code for the purpose of making the solution more performant, more reusable, less brittle, easier to test, and/or more maintainable.
 We want to try and end up with small focused functions that do one thing. 
 To help guide you in your refactoring below you will find a new function that will replace everything();. 
 Use it to help you to know how to break up the massive function we started with.
 We need to refactor the everything function. In the end we want a function like below create the appropriate functions, move the functionality from everything() to the functions so that the showQuakes() function below will work.

async function showQuakes() {
  // get the current location
  const location = await initPos();

  // get the list of quakes for the location
  quakes = await getQuakesForLocation(location);

  // render the list to the list element
  const listElement = document.querySelector("#quakeList");
  listElement.innerHTML = generateListMarkup(
    quakes.features,
    earthquakeListTemplate
  );

  // attach a listener to the quakes that will listen for a click and render out details about the quake
  listElement.addEventListener("click", earthQuakeClickHandler);
}
            
//Reviewing this new function we can see that we will need to create at least the following functions:

 initPos()
 getQuakesForLocation(location)
 generateListMarkup(list, templateCallback)
earthQuakeListTemplate(data)
earthQuakeClickHandler(event)
...and one more. ????
Notice what it is not responsible for: getting the location, or doing the actual rendering of the html.

We will use a class to represent our model. 
I've provided a bit of code below to get you started. Copy it into your file.

import { getJSON } from './utilities.js';

// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}
            
//Notice I took the liberty of importing the getJSON function we wrote earlier. We will need it.

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
    
*/