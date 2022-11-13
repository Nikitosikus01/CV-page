


const btnMobileMenu = document.getElementById('navbar_mobile-elements_button');
const mobileMenu = document.getElementById('navbar_mobile-elements_links');

btnMobileMenu.addEventListener('click', () => {
    
    if(getComputedStyle(mobileMenu).display == 'none'){
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
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


const buttonOtherCards = document.getElementById('education_youtube_channel_title');
const otherCards = document.getElementById('education_youtube_channel_other_cards');
const otherCardsSymbol = document.getElementById('education_youtube_channel_title_symbol');


buttonOtherCards.addEventListener('click', () => {
    // change + to -

    if (otherCardsSymbol.textContent == '+') {
        otherCardsSymbol.innerHTML = '-';
    } else {
        otherCardsSymbol.innerHTML = '+';
    }

    if (getComputedStyle(otherCards).display == 'none'){
        otherCards.style.display = 'flex';
    } else {
        otherCards.style.display = 'none';
    }

})



const buttonFictionBooks = document.getElementById('education_content_books_title');
const fictionBooks = document.getElementById('education_content_books_fiction');
const fictionBooksSymbol = document.getElementById('education_content_books_title_symbol');

buttonFictionBooks.addEventListener('click', () => {
    // change + to -

    if (fictionBooksSymbol.textContent == '+') {
        fictionBooksSymbol.innerHTML = '-';
    } else {
        fictionBooksSymbol.innerHTML = '+';
    }

    if (getComputedStyle(fictionBooks).display == 'none'){
        fictionBooks.style.display = 'flex';
    } else {
        fictionBooks.style.display = 'none';
    }

})






