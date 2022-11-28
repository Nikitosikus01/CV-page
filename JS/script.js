


const btnMobileMenu = document.getElementById('navbar_mobile-elements_button');
const mobileMenu = document.getElementById('navbar_mobile-elements_links');
const mobileMenuOtherSpace = document.getElementById('block_navbar_mobile-other_space');

btnMobileMenu.addEventListener('click', () => {
    
    if(getComputedStyle(mobileMenu).display == 'none'){
        mobileMenu.style.display = 'block';
        mobileMenuOtherSpace.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
        mobileMenuOtherSpace.style.display = 'none';
    }
});

mobileMenuOtherSpace.addEventListener('click', () => { 
    if (mobileMenuOtherSpace.style.display == 'block') {
        mobileMenuOtherSpace.style.display = 'none';
        mobileMenu.style.display = 'none';
    } 

});



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
    
});

buttonPDFCV.addEventListener('click', () => {
    if(getComputedStyle(modalWindowPDFCV).display == 'none'){
        modalWindowPDFCV.style.display = 'block';
    }
});

// clouse modal window constants by cross
buttonContactsCross.addEventListener('click', () => {
    modalWindowContacts.style.display = 'none';
});

// clouse modal window PDF cv by cross
buttonPDFCross.addEventListener('click', () => {
    modalWindowPDFCV.style.display = 'none';
});

// clouse modal windows constants and PDF by clicking on an empty space
window.onclick = (event) => { 
    if (event.target == modalWindowContacts) {
        modalWindowContacts.style.display = 'none';
    } else if (event.target == modalWindowPDFCV) {
        modalWindowPDFCV.style.display = 'none';
    }
};


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

});



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





// events










// sports



const buttonHobbies = document.getElementById('section_hobbies_title');
const otherHobbiesCards = document.getElementById('section_hobbies_sports-container');
const otherHobbiesCardsMobile = document.getElementById('section_hobbies_sports-container_mobile');
const hobbiesTitleSymbol = document.getElementById('section_hobbies_title_symbol');


buttonHobbies.addEventListener('click', () => {
    // change + to -

    if (getComputedStyle(otherHobbiesCards).display == 'none' && getComputedStyle(otherHobbiesCardsMobile).display == 'block') {
        buttonHobbies.id.remove();
    }

    if (hobbiesTitleSymbol.textContent == '+') {
        hobbiesTitleSymbol.innerHTML = '-';
    } else {
        hobbiesTitleSymbol.innerHTML = '+';
    }

    if (getComputedStyle(otherHobbiesCards).display == 'none'){
        otherHobbiesCards.style.display = 'flex';
    } else {
        otherHobbiesCards.style.display = 'none';
    }

    // if (getComputedStyle(otherHobbiesCards).display == 'none' && getComputedStyle(otherHobbiesCardsMobile).display == 'none'){
    //     otherHobbiesCardsMobile.style.display = 'block';    
    // } else {
    //     otherHobbiesCardsMobile.style.display = 'none';
    // }

});


// sports cards
const slides = document.querySelectorAll('.section_hobbies_sports-container_slide');

for (const slide of slides ) {
    slide.addEventListener('mouseover', () => {
        clearActiveClasses();
        slide.classList.add('active');
    });
}

function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}




// 



