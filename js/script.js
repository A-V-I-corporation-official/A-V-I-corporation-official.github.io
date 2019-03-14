var gameHeader = document.querySelector('.games-header');

function paralax() {
   let s = window.pageYOffset / 2;
   gameHeader.style.backgroundPosition = 'center ' + s + 'px';
}

window.onscroll = paralax;