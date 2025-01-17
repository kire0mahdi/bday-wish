// Display loader for 2 seconds
window.onload = function() {
    setTimeout(() => {
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
    }, 2000);
    
    // Set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
};

// Music Event
const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("music");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicButton.textContent = "Play Music";
    } else {
        backgroundMusic.play();
        musicButton.textContent = "Pause Music";
    }
    isPlaying = !isPlaying;
}