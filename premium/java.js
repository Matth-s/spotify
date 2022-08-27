const section_tableau = document.querySelector('.container-troisieme-section');
const navbar = document.querySelector('#nav-header');

window.addEventListener("scroll", (event) => {
    console.log(scrollY);
    if(scrollY >= 635) {    
        section_tableau.classList.add('animation-tableau')
    }
});

document.addEventListener('DOMContentLoaded', function(){
    navbar.classList.add('animation-header');
    console.log("page chargée");
 });