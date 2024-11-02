const DiaryEntryLinks = {
    
};

let currentDiaryEntry = null;


// Function to redirect to the selected link
function redirectToLink(entryNumber) {
    currentDiaryEntry = entryNumber;
    if (currentDiaryEntry && DiaryEntryLinks[currentDiaryEntry]) {
        window.open(DiaryEntryLinks[currentDiaryEntry], '_blank');
    }
}
