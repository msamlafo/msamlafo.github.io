
//const skillsSection = document.querySelector('.skillsSection');
// skillsSection.addEventListener('mouseover', rotate360());
// const skillsIcon = document.querySelectorAll('.skillsIcon');



// function soundEffect(){
//     skillsSection.play();
// }

// function toggleActiveNav(){
//     // if the page has scrolled down or up more than 50px,
//     // then grab the nav element
//     // add/remove the active class on nav element (toggle)

//     console.log(window.scrollY);
//     console.log('me, me, me');
// }

function myFunction() {
  // console.log(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50);
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('nav').classList.add('bg-dark');
  }
  else{
      document.querySelector('nav').classList.remove('bg-dark');
  }
}

window.onscroll = function () {
  myFunction();
};