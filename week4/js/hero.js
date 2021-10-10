const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

form.origin.value = 'Born as Kal-El on the planet Krypton...';

//storing data as an object
function makeHero(e){
    e.preventDefault(); //prevent the form from being submitted
    const hero = {}; //create an empty object

    hero.name = form.heroName.value; //create a property based on the input value
    
    

    //password: concealed texts
    hero.realName = form.realName.value;

    //add as a property
    form.powers;

    //see if each checkbox was checked
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    /*
    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++){
        if (form.powers[i].checked){
            hero.powers.push(form.powers[i].value);
        }
    }
    */

    form.category;
    hero.category = form.category.value;

    hero.age = form.age.value;

    form.city;
    hero.city = form.city.value;
    //find out index
    //form.city.options[form.city.selectedLndex].text

    hero.origin = form.origin.value;
 

    //JSON.Stringify conveting object into JSON to store the data in database or submitted web service
alert(JSON.stringify(hero));
return hero;
}

//custom validation
form.addEventListener('submit', validate, false);

function validate(e){
    const firstLetter = form.heroName.value[0];
    if ( firstLetter.toUpperCase() === 'X'){
        e.preventDefault(); //stop the form beign submitted
        alert('Your name is not allowed to start with X!');
    }
}

//giving instant feedback
const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = 'Your name is not allowed to start with X.';
label.append(error);

function validateInline(){
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
        error.style.display = 'block';
    }
    else {
        error.style.display = 'none';
    }
}

form.heroName.addEventListener('keyup', disableSubmit, false);
//disable the submittion
function disableSubmit(e){
    if(e.target.value === ''){
        document.getElementById('submit').disabled = true;
    }
    else {
        document.getElementById('submit').disabled = false;
    }
} 