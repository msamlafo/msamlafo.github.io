
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

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    //console.log(scroll_pos);
    console.log('me, me, me');
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
