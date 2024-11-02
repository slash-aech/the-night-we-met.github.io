document.addEventListener('DOMContentLoaded', () => {
    const ghostItems = document.querySelectorAll('.ghost-item');
    const ghostModal = document.getElementById('ghost-modal');
    const closeModalButton = document.getElementById('close-modal');
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
        const imagePath = `Elements/Ghost Journal/${currentIndex + 1}.png`;
        ghostImage.src = imagePath; // Set the image source
    }

    // Function to close the modal
    function closeModal() {
        ghostModal.style.display = 'none';
        ghostImage.src = ''; // Clear image when closing modal
    }

    // Event listener for ghost items using event delegation
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('ghost-item')) {
            const index = Array.from(ghostItems).indexOf(event.target);
            openModal(index); // Open the modal with the index of clicked item
        }
    });

    // Close modal on button click
    closeModalButton.addEventListener('click', closeModal);

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
            closeModal();
        }
    });
});