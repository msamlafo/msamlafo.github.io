
const skillsSection = document.querySelector('.skillsSection');
skillsSection.addEventListener('mouseover', rotate360());
const skillsIcon = document.querySelectorAll('.skillsIcon');

function soundEffect(){
    skillsSection.play();
}