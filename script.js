
const buttonMenu = document.getElementById('button_menu');
const blockNavbar = document.getElementById('navbar');
const navInvis = document.getElementById('navbar_invisibility');
// попробовать реализовать через раскомментирование
buttonMenu.addEventListener('click', () => {
    blockNavbar.classList.toggle('navbar_display');
    if(getComputedStyle(navInvis).display == 'none'){
        navInvis.style.display = 'block';
    } else {
        navInvis.style.display = 'none';
    }
})


const buttonContacts = document.getElementById('button_contacts');
const modalWindowContacts = document.getElementById('backlayer_contacts');

const buttonPDFCV = document.getElementById('button_PDFCV');
const modalWindowPDFCV = document.getElementById('backlayer_PDF');

const buttonContactsCross = document.getElementById('button_contacts_cross');
const buttonPDFCross = document.getElementById('button_PDF_cross');


// open modal window
buttonContacts.addEventListener('click', () => {
    if(getComputedStyle(modalWindowContacts).display == 'none'){
        modalWindowContacts.style.display = 'block';
    } 
    // else {
    //     modalWindowContacts.style.display = 'none';
    // }
})

buttonPDFCV.addEventListener('click', () => {
    if(getComputedStyle(modalWindowPDFCV).display == 'none'){
        modalWindowPDFCV.style.display = 'block';
    }
})

// clouse modal window constants by cross
buttonContactsCross.addEventListener('click', () => {
    modalWindowContacts.style.display = 'none';
})

// clouse modal window PDF cv by cross
buttonPDFCross.addEventListener('click', () => {
    modalWindowPDFCV.style.display = 'none';
})

// clouse modal windows constants and PDF by clicking on an empty space
window.onclick = (event) => { 
    if (event.target == modalWindowContacts) {
        modalWindowContacts.style.display = 'none';
    } else if (event.target == modalWindowPDFCV) {
        modalWindowPDFCV.style.display = 'none';
    }
}














