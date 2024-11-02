document.addEventListener('DOMContentLoaded', () => {
    const ghostItems = document.querySelectorAll('.ghost-item');
    const ghostModal = document.getElementById('ghost-modal');
    const closeModal = document.getElementById('close-modal');
    const ghostImage = document.getElementById('ghost-image');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    let currentIndex = 0; // Track the current ghost displayed

    // Function to open the modal
    function openModal(index) {
        ghostModal.style.display = 'block';
        currentIndex = index; // Set current index
        updateImage(); // Update the displayed image
    }

    // Function to update the displayed image based on currentIndex
    function updateImage() {
        // Set the image source based on the current index
        ghostImage.src = `Elements/Ghost Journal/${currentIndex + 1}.png`; // Adjust according to your image naming
    }

    // Function to close the modal
    function closeGhostModal() {
        ghostModal.style.display = 'none';
        ghostImage.src = ''; // Clear image when closing modal
    }

    // Event listeners for ghost items
    ghostItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index); // Open the modal with the index of clicked item
        });
    });

    // Close modal on button click
    closeModal.addEventListener('click', closeGhostModal);

    // Navigation arrows
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + ghostItems.length) % ghostItems.length; // Move to previous ghost
        updateImage(); // Update the displayed image
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % ghostItems.length; // Move to next ghost
        updateImage(); // Update the displayed image
    });

    // Close modal on Escape key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeGhostModal();
        }
    });
});
