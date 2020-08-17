var nav = document.getElementById('nav');

window.onscroll = function(){
  if (window.pageYOffset > 290) {
    nav.style.background = "#000000";
    nav.style.opacity = "0.8";
  }
  else{
    nav.style.background = "transparent";
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var btn = document.getElementById('btn-icon')
btn.addEventListener('click', function(){
  toTopFunction();
})
