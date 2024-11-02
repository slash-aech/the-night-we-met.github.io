document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementById('body');
    const rainContainer = document.querySelector(".rain");
    const startButton = document.getElementById('start-button');
    const warningContainer = document.getElementById('warning-container');
    const ghostJumpscare = document.getElementById('ghost-jumpscare');
    const ghostScreech = document.getElementById('ghost-screech');
    const rainSound = document.getElementById('rain-sound');
    const horrorMusic = document.getElementById('horror-music');
    const thunderSound = document.getElementById('thunder-sound');
    const titleContainer = document.getElementById('title-container');
    const reportButton = document.getElementById('report-button');
    const gameTitle = document.getElementById("game-title");
    const welcomeText = document.getElementById("welcome-text");
    const originalTitle = gameTitle.textContent; // Original title text
    const violinSound = document.getElementById("violin-sound"); // Get the audio element

    let flashCount = 0;
    const INITIAL_VOLUME = {
        rain: 0.5,
        horror: 0.4,
        thunder: 0.5,
        ghostScreech: 1.0,
    };

    // Set initial volumes
    rainSound.volume = INITIAL_VOLUME.rain;  
    horrorMusic.volume = INITIAL_VOLUME.horror;  
    thunderSound.volume = INITIAL_VOLUME.thunder; 
    ghostScreech.volume = INITIAL_VOLUME.ghostScreech; 

    function createRaindrops() {
        for (let i = 0; i < 50; i++) {
            const raindrop = document.createElement("div");
            raindrop.classList.add("raindrop");
            raindrop.style.left = Math.random() * 100 + "%";
            raindrop.style.animationDuration = (Math.random() * 1.5 + 0.5) + "s";
            rainContainer.appendChild(raindrop);
        }
    }

    function simulateLightning() {
        flashCount++;
        body.classList.add('lightning-flash');

        if (flashCount === 3) {
            thunderSound.play();
            flashCount = 0;
        }

        setTimeout(() => {
            body.classList.remove('lightning-flash');
        }, 100);

        setTimeout(simulateLightning, Math.random() * 10000 + 5000);
    }

    function handleStartButtonClick() {
        // Remove warning and button
        warningContainer.style.display = 'none';

        setTimeout(() => {
            ghostJumpscare.style.display = 'block';
            ghost Jumpscare.style.animation = 'ghost-zoom 0.7s forwards';
        }, 300); // Delay for 300 milliseconds

        ghostScreech.play();

        // Remove ghost after jumpscare
        setTimeout(() => {
            ghostJumpscare.style.display = 'none';

            // Rain Environment
            rainSound.play();
            horrorMusic.play();
            createRaindrops();
            titleContainer.style.display = 'block';

            setTimeout(simulateLightning, Math.random() * 5000 + 3000);
        }, 2000); // Delay for ghost exit
    }

    startButton.addEventListener('click', handleStartButtonClick);

    gameTitle.addEventListener("mouseover", function () {
        welcomeText.style.opacity = '0'; // Fade out the welcome text
        gameTitle.textContent = "You Will Die"; // Change to the desired text on hover
        violinSound.play(); // Play the violin sound
    });

    gameTitle.addEventListener("mouseout", function () {
        welcomeText.style.opacity = '1'; // Fade back in the welcome text
        gameTitle.textContent = originalTitle; // Change back to original text
        violinSound.pause(); // Stop the violin sound
        violinSound.currentTime = 0; // Reset the audio to the beginning
    });
});