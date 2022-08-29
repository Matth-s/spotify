const section_tableau = document.querySelector('.container-troisieme-section');
const navbar = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

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


 toggle.addEventListener('click', function() {
    body.classList.toggle('deroulant')
 });