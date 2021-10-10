const form = document.forms[0];
//document.forms returns all the form as a collection that means it needs index notation
//alternative: using the name attribute
//const form = document.forms[ 'search' ];

const input = form.elements.searchInput;
//console.log(input);

input.addEventListener('focus', ()=> console.log('focused'), false);
input.addEventListener('blur', ()=> console.log('blurred'), false);
input.addEventListener('change', ()=> console.log('changed'), false);


//intercept submittion
form.addEventListener('submit', search, false);
/*function search(e) {
    alert('Form Submitted');

    //stop
    e.preventDefault();
}
*/

function search(e) {
    alert(`You searched for: ${input.value}`);
    e.preventDefault();
}

input.value = 'Search Here!'
//take out the message from the input
input.addEventListener('focus', function (){
    if (input.value === 'Search Here!' ){
        input.value = ''
    }
}, false);

//put it back when the user hit outside of input 
input.addEventListener('blur', function (){
    if (input.value === '' ){
        input.value = 'Search Here!';
    }
}, false);

/*What is the diffenrece between a place holder?
It does not submit the input value without filling*/

