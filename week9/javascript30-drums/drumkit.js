//play(): audio methods
function playSound(){
    audio.play();
    }

    //dataset.key
    
    const div = document.querySelector('div[data-key]');
    const sound = document.querySelector('audio[data-key]');
    if (div==sound){
        console.log('play');
    }
    const button = document.querySelectorAll('')
    .addEventListener('click', playSound);