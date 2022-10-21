let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain2 = document.getElementById('mountain2');
let lake = document.getElementById('lake');
let boat = document.getElementById('boat');
let mountain3 = document.getElementById('mountain3');
window.onscroll = function(){
    let value =scrollY;
    moon.style.right = value + 'px' 
    mountain2.style.top = value + 'px' ;
    boat.style.left = value + 'px';
}