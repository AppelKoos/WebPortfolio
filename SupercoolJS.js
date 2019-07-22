
window.onscroll = function () { myFunction() };


var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
//Sticky nav
function myFunction() {
	console.log('You is scrolling');
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}


// mobile nav right button
function mobileTopNav() {
	var x = document.getElementById('myLinks');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}

