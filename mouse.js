const mouseCursor = document.querySelector('#circle');

window.addEventListener('mousemove', function(e){
	mouseCursor.style.top = e.pageY + "px";
	mouseCursor.style.left = e.pageX -12 + "px";
});