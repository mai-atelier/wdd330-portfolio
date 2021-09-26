function sum() {

    let n = parseInt(document.getElementById('numbers').value);
    let answer = 0;
 for ( let i=1; 1 <= n; i++ ){
    answer+=i;
 }
 document.getElementById('output').innerHTML = answer;
 }

function add() {
    let x = parseInt(document.getElementById('input1').value);
    let y = parseInt(document.getElementById('input2').value);
    let a1 = x+y; 
    document.getElementById('output2').innerHTML = a1;

}

function sub() {
    let x = parseInt(document.getElementById('input1').value);
    let y = parseInt(document.getElementById('input2').value);
    let a2 = x-y; 
    document.getElementById('output2').innerHTML = a2;
}

function times() {
    let x = parseInt(document.getElementById('input1').value);
    let y = parseInt(document.getElementById('input2').value);
    let a3 = x*y; 
    document.getElementById('output2').innerHTML = a3;
}

function devide() {
    let x = parseInt(document.getElementById('input1').value);
    let y = parseInt(document.getElementById('input2').value);
    let a4 = x/y; 
    document.getElementById('output2').innerHTML = a4;
}