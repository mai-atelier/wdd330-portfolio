const cell = document.querySelectorAll('.cell');
console.log(cell);
//nodeList to array or loop over the nodeList
//.forEach()?
//cell.addEventListener('click', xo);

//cell.forEach(()=>addEventListener('click', xo, false));

for (let i = 0; i < cell.length; i++) {

let item = cell[i];
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
   
    item.append(p1, p2);

    p1.textContent = '◯';
    p2.textContent = '×';

//set default
    p1.style.display = 'none';
    p2.style.display = 'none';


//add eventListener for each cell
//item.addEventListener('click', xo);
}

const play = document.getElementById('board');
play.addEventListener('click', xo, false);

function xo(cell){
    for(let tap = 0; tap < cell.length; tap++){
      
    if (tap % 2 === 0){
        document.getElementById('one') = '◯';
        //p1.style.display = 'block';
       
    console.log('◯');
    }


    else {

        //p2.style.display = 'block';

    console.log('×');
    }
}
    return xo;
    }





//https://developer.mozilla.org/en-US/docs/Web/API/NodeList
//https://newbedev.com/addeventlistener-on-nodelist

const clear = document.getElementById("reset");
//clear.removeEventListener('click', remove);
