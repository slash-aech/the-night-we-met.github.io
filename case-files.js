const caseFileLinks = {
    1: "https://drive.google.com/file/d/1MqpkNUxBlPGlZGFkKVKic6-OxnT41weX/view?usp=sharing",
    2: "https://drive.google.com/file/d/1Z3GBjmgXf0nC2EF4UhazcYGhpulj0cip/view?usp=sharing",
    3: "https://drive.google.com/file/d/1EUvReVNnku38PAG-I1SOdI4BZ2c4O-Hg/view?usp=sharing",
    4: "https://drive.google.com/file/d/1pLOOG0uBgGBknUe08kGJylS0O0tYSodu/view?usp=sharing",
    5: "https://drive.google.com/file/d/1y4msW--OqNWawoNdYyIu9Mac7N709rCx/view?usp=sharing",
    6: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
};

let currentCaseFile = null;

// Function to show dialog
function promptRedirect(fileNumber) {
    currentCaseFile = fileNumber;
    document.getElementById("dialog-box").style.display = "flex";
}

// Function to redirect to the selected link
function redirectToLink() {
    if (currentCaseFile && caseFileLinks[currentCaseFile]) {
        window.open(caseFileLinks[currentCaseFile], '_blank');
    }
    closeDialog();
}


// Function to close dialog
function closeDialog() {
    document.getElementById("dialog-box").style.display = "none";
    currentCaseFile = null;
}
