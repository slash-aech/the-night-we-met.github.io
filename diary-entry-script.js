const diaryLinks = {
    1: "https://drive.google.com/file/d/your-diary-entry-1",
    2: "https://drive.google.com/file/d/your-diary-entry-2",
    3: "https://drive.google.com/file/d/your-diary-entry-3",
    4: "https://drive.google.com/file/d/your-diary-entry-4",
    5: "https://drive.google.com/file/d/your-diary-entry-5",
    6: "https://drive.google.com/file/d/your-diary-entry-6",
};

let currentDiaryEntry = null;

function promptRedirect(entryNumber) {
    currentDiaryEntry = entryNumber;
    document.getElementById("dialog-box").style.display = "flex";
}

function redirectToLink() {
    if (currentDiaryEntry && diaryLinks[currentDiaryEntry]) {
        window.location.href = diaryLinks[currentDiaryEntry];
    }
    closeDialog();
}

function closeDialog() {
    document.getElementById("dialog-box").style.display = "none";
    currentDiaryEntry = null;
}
