const diaryLinks = {
    1: "https://drive.google.com/file/d/your-diary-entry-1",
    2: "https://drive.google.com/file/d/your-diary-entry-2",
    3: "https://drive.google.com/file/d/your-diary-entry-3",
    4: "https://drive.google.com/file/d/your-diary-entry-4",
    5: "https://drive.google.com/file/d/your-diary-entry-5",
    6: "https://drive.google.com/file/d/your-diary-entry-6",
};

let currentDiaryEntry = null;

// Function to show the dialog
function promptRedirect(entryNumber) {
    currentDiaryEntry = entryNumber;
    const dialogBox = document.getElementById("dialog-box");
    dialogBox.classList.add("visible"); // Use a CSS class to show the dialog
}

// Function to redirect to the selected link
function redirectToLink() {
    if (currentDiaryEntry && diaryLinks[currentDiaryEntry]) {
        window.location.href = diaryLinks[currentDiaryEntry];
    } else {
        alert("Please select a valid diary entry."); // Error handling for invalid selection
    }
    closeDialog();
}

// Function to close the dialog
function closeDialog() {
    const dialogBox = document.getElementById("dialog-box");
    dialogBox.classList.remove("visible"); // Use a CSS class to hide the dialog
    currentDiaryEntry = null;
}

// Example: Adding event listeners to buttons (assuming buttons exist in the HTML)
document.querySelectorAll('.entry-button').forEach((button, index) => {
    button.addEventListener('click', () => promptRedirect(index + 1));
});

document.getElementById('redirect-button').addEventListener('click', redirectToLink);
document.getElementById('close-button').addEventListener('click', closeDialog);