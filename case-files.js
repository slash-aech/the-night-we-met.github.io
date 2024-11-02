const caseFileLinks = {
    1: "https://drive.google.com/file/d/1b_4n6tEJguaLLIByyQmhLWAVttsdGFHA/view?usp=sharing",
    2: "https://drive.google.com/file/d/1hnldpxqyactR5_t3gIef1tUDluUlhFpc/view?usp=sharing",
    3: "https://drive.google.com/file/d/1cqRVsARu6jONWfjs1XkYaJV0n8pq8R-t/view?usp=sharing",
    4: "https://drive.google.com/file/d/18vTfUKPZ7_KrjUQdQ19wyAh5l6J1UMuF/view?usp=sharing",
    5: "https://drive.google.com/file/d/1MiJFrj6VuV091ylpNb03wC-VB9ViBIAk/view?usp=sharing",
    6: "https://drive.google.com/file/d/your-case-file-6",
};

let currentCaseFile = null;

// Function to show dialog
function promptRedirect(fileNumber) {
    currentCaseFile = fileNumber;
    const dialogBox = document.getElementById("dialog-box");
    dialogBox.classList.add("visible"); // Use a CSS class to show the dialog
}

// Function to redirect to the selected link
function redirectToLink() {
    if (currentCaseFile && caseFileLinks[currentCaseFile]) {
        window.open(caseFileLinks[currentCaseFile], '_blank');
    } else {
        alert("Please select a valid case file."); // Error handling for invalid selection
    }
    closeDialog();
}

// Function to close dialog
function closeDialog() {
    const dialogBox = document.getElementById("dialog-box");
    dialogBox.classList.remove("visible"); // Use a CSS class to hide the dialog
    currentCaseFile = null;
}