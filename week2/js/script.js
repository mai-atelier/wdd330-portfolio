function sum() {
    let n = parseInt(document.getElementById('numbers').value);
    let answer = 0;

 for (let i=1; 1<=n; i++){
  answer = n+=i;
 }
 document.getElementById('output').innerHTML = answer;
 }

 
 