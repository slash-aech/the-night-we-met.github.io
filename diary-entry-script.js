const DiaryEntryLinks = {
    1: "https://drive.google.com/file/d/1jXmHlKzTsWpSftrWSlA45htgIgWWcme4/view?usp=sharing",
    2: "https://drive.google.com/file/d/1SXmoNU6VJy1J45X1LbaCAqezADnDQIU2/view?usp=sharing",
    3: "https://drive.google.com/file/d/19gF-TNxsundyNumWQ88CC28ZmYywInJp/view?usp=sharing",
    4: "https://drive.google.com/file/d/1x4pksXn5F88E1RgznBRfq5rSWx4Zjt7t/view?usp=sharing",
    5: "https://drive.google.com/file/d/1ZK6W8Z8Phm7Twom3ZZxjlyTbADtp54gV/view?usp=sharing",
};

let currentDiaryEntry = null;


// Function to redirect to the selected link
function redirectToLink(entryNumber) {
    currentDiaryEntry = entryNumber;
    if (currentDiaryEntry && DiaryEntryLinks[currentDiaryEntry]) {
        window.open(DiaryEntryLinks[currentDiaryEntry], '_blank');
    }
}
