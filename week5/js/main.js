import Hikes from './hikes';

//If you organized your code using a class that you exported from your module, 
//you need to create an instance of that class before you can use it.
const myHike = new Hikes('hikeListId');

  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
    myHike.showHikeList();
  });
  
myHike.hikeList;
