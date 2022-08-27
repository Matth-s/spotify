const section_tableau = document.querySelector('.container-troisieme-section');

window.addEventListener("scroll", (event) => {
    console.log(scrollY);
    if(scrollY >= 635) {    
        section_tableau.classList.add('animation-tableau')
    }
});