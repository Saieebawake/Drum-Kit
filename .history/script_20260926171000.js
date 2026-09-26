window.addEventListener('keydown', function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key
    if(!audio) return;
    audio.currentTime = 0; 
    audio.play();
});