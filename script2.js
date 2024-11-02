document.addEventListener("DOMContentLoaded", function () {
    const horrorMusic2 = document.getElementById('horror-music-2');
    horrorMusic2.play();

});

// JavaScript to add dynamic effects (e.g., typing effect for letters)
const letters = document.querySelectorAll('.game-text');
let index = 0;

function revealLetter() {
    if (index < letters.length) {
        letters[index].style.opacity = '1';
        index++;
        setTimeout(revealLetter, 500);  // Adjust timing as needed
    }
}

revealLetter();
