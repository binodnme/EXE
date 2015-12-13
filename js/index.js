console.log('start');


var slide = document.getElementsByClassName('slide')[0];

var style = window.getComputedStyle(slide);
// console.log(style);

// var slideWidth= parseInt(style.getPropertyValue('width'));
// console.log('width: ',slideWidth)


var active = 1;
var slider = document.getElementsByClassName("slider-long")[0];
var slides = slider.children;
var slide = slider.children[0];


var animator = new Animator(slider);

function slideImage(){
	var slideWidth= parseInt(style.getPropertyValue('width'));
	console.info('say hello');
	active = active == slides.length ? active = 1 : ++active;
	var ml = (slideWidth * (active-1) * -1);
	console.info('ml: ',ml);

	animator.animate('margin-left',ml,1000);
	// animator.animate("margin-left",ml,1000);
	// navigate.mark(active);
}
// var intervalId= window.setInterval(slideImage, 3000);