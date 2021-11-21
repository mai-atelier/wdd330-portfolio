//04 Quakes module
//Now we can start on the quakes module in the other file index.js. We will want to use our utilities, so let's import them:

import { getJSON, getLocation } from 'utilities.js';
/*...then let's add a variable to hold the Base Url for our app. 
We can use the same one we used earlier for testing. Notice that is has the start and end times embedded in it. 
That will work for now, but eventually we will probably want those to be able to change and so we will remove them from that const.

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
Make use of our two functions to get the current location from the browser...then send that on to the API to request the earthquakes within a 100km radius of that location. The URL that you should end up with should look like this:

https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100
Construct this URL with the current location from your helper function.
I would recommend creating a function to do this. Your function should look something like this:
*/

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function testGetQuakesForLocation(){
  // call the getLocation function to get the lat/long

  // use that information to build out the correct URL
  const geoUrl = baseUrl + 'add location information here' 
  // use the url to request the correct quakes 

  //log out the quakes for now.
}
getQuakesForLocation();
//This code is for testing only to make sure these parts are working. 
//We will remove this function later and do this in another part of our code!




/*Putting it all together
The next step is to let our HTML know about our modules. Import your Controller into the index.js file, create an instance of the class (new QuakeController()), then call the init() method. You may want to console.log something out from that method until we create the methods it calls to help us know if everything is working correctly. If there are errors, fix them :) If not move on to the next step

If you did not remove the function we created earlier to test the geolocation and earthquake fetch earlier (testGetQuakesForLocation), make sure to do it now.

If you get an error that talks about import not recognized or something similar...remember that to use ES Modules we have to tell the browser that we want to use modules. <script src="index.js" type="module" >

The other error that pops up often is a file not found for your imported modules. If you see this check your file path. You probably need to add a './' to the front of your path like this: import Quake from './Quake.js';

 Finishing up
The last step is go back in our model, view, and controller and finish writing the methods as indicated in the comments. The two first methods to complete should be the initPos method from the controller, then the getEarthQuakesByRadius method from the model, test each method as you finish them.

After that work on the rest of the controller or View methods as it makes sense. I would recommend following the same order...finish a method, then test. It will keep your errors under control and make your code easier to troubleshoot.*/