deglitcher();

function deglitcher() {
    const glitch = document.getElementById('bottom-gl');
    const glitch2 = document.getElementById('upper-gl');
    console.log(glitch)
    console.log(glitch2)
    setTimeout(function () {
        glitch.classList.add('glitch-off');
        glitch.classList.remove('glitch'); 
        glitch2.classList.add('glitch-off');
        glitch2.classList.remove('glitch'); 
        console.log('Trele Morele');
    }, 5000);
}