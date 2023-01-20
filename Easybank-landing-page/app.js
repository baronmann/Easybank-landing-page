//variables
const main = document.querySelector('.block');
const hamburger = document.querySelector('.hamburger');
const toggleMenu = document.querySelector('.toggleMenu');
const close = document.querySelector('.closeIcon');

//eventListener

hamburger.addEventListener('click', () =>{
toggleMenu.style.display = 'block' ;
close.style.display = 'block';
hamburger.style.display = 'none';

})


close.addEventListener('click', () =>{
    toggleMenu.style.display = 'none'
    close.style.display = 'none'
    hamburger.style.display = 'block'


})
