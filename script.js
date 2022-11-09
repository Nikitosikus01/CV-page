
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



const buttonMenu = document.querySelector('.header_button_line_menu');
const buttonContacts = document.querySelector('.header_button_line_contacts');

const blockNavbar = document.querySelector('.navbar');
const blockContacts = document.querySelector('.contacts');


buttonMenu.onclick = function () {
    console.log('Click');
    blockNavbar.style.display = "block";
}

buttonContacts.onclick = function () {
    blockContacts.style.display = 'block';
}

