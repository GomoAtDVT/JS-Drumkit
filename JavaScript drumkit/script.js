

window.addEventListener('keydown', function(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   console.log(audio);
   if (!audio) return;//stop the function from running all together
   audio.currentTime = 0;//gets rid of the delay
   audio.play();
   key.classList.add('playing');
});

//remove the transition effect
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');//shows all the keys in the nodelist
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//you have to loop through all the keys in the nodelist to remove the transition effect

