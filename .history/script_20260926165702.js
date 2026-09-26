function removeTransition (e) {
    if(e.propertyName !== 'transform')
        return;
    e.target.classList.remove('playing');
};

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio)
}