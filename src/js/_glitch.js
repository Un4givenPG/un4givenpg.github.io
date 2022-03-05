deglitcher();

function deglitcher() {
    screen.orientation.lock('portrait')
    const glitch = document.getElementById('bottom-gl');
    const glitch2 = document.getElementById('upper-gl');
    setTimeout(function () {
        glitch.classList.add('glitch-off');
        glitch.classList.remove('glitch'); 
        glitch2.classList.add('glitch-off');
        glitch2.classList.remove('glitch'); 
    }, 3000);
}