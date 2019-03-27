var gameHeader = document.querySelector('.header');

function paralax() {
   let s = window.pageYOffset / 3;
   gameHeader.style.backgroundPosition = 'center ' + s + 'px';
}

window.onscroll = paralax;
