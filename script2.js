document.addEventListener("DOMContentLoaded", function () {
    const horrorMusic2 = document.getElementById('horror-music-2');
    if (horrorMusic2) {
        horrorMusic2.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }
});

// JavaScript to add dynamic effects (e.g., typing effect for letters)
const letters = document.querySelectorAll('.game-text');
let index = 0;
const typingDelay = 500; // Configurable typing delay

function revealLetter() {
    if (index < letters.length) {
        letters[index].style.opacity = '1'; // Alternatively, use a CSS class
        index++;
        setTimeout(revealLetter, typingDelay);  // Use the configurable delay
    }
}

revealLetter();