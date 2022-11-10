
// document.getElementById('menu').onmouseover = function(event) {
//     let target = event.target;
//     if (target.className == 'header_button_line_menu') {
//         let s = target.getElementsByClassName('navbar');
//         closeMenu();
//         s[0].style.display = 'block';
//     }
// }    

// function closeMenu () {
//     let menu = document.getElementById('menu');
//     let navbar = document.getElementsByClassName('navbar');
//     for (let i = 0; i < navbar.length; i++) {
//         navbar[i].style.display="none";
        
//     }
// }



const buttonMenu = document.getElementById('button_menu');
const blockNavbar = document.getElementById('navbar');

const buttonContacts = document.getElementById('button_contacts');
const blockContacts = document.getElementById('contacts');


buttonMenu.addEventListener('click', () => {
    console.log('Click');
    
    blockNavbar.classList.toggle('navbar_display');
})

buttonContacts.addEventListener('click', () => {
    console.log('Click');

    // if()
    blockContacts.style.display = 'block';
    blockContacts.style.display = 'none';
    
})

