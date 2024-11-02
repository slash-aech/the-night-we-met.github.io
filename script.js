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

    let flashCount = 0;
    
    // Initial Volume
    rainSound.volume = 0.5;  
    horrorMusic.volume = 0.4;  
    thunderSound.volume = 0.5; 
    ghostScreech.volume = 1.0; 

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

    startButton.addEventListener('click', function () {
        // Remove warning and button
        warningContainer.style.display = 'none';

        
        setTimeout(function () {
        ghostJumpscare.style.display = 'block';
        ghostJumpscare.style.animation = 'ghost-zoom 0.7s forwards';
    }, 300); // Delay for 300 milliseconds

        
        ghostScreech.play();

        // Remove ghost after jumpscare
        setTimeout(function () {
            ghostJumpscare.style.display = 'none';
            
            
            // Rain Enviroment
            rainSound.play();
            horrorMusic.play();
            createRaindrops();
            titleContainer.style.display = 'block';


            setTimeout(simulateLightning, Math.random() * 5000 + 3000);
        }, 2000); // Delay for ghost exit

});
});

document.addEventListener("DOMContentLoaded", function () {
    const gameTitle = document.getElementById("game-title");
    const welcomeText = document.getElementById("welcome-text");
    const originalTitle = gameTitle.textContent; // Original title text
    const violinSound = document.getElementById("violin-sound"); // Get the audio element

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
