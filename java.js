const navbar = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

document.addEventListener('DOMContentLoaded', function(){
    navbar.classList.add('animation-header');
    console.log("page chargée");
 });


 toggle.addEventListener('click', function() {
    body.classList.toggle('deroulant');
 });