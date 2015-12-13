console.log('start');


var slide = document.getElementsByClassName('slide')[0];

var style = window.getComputedStyle(slide);
// console.log(style);

var slideWidth= parseInt(style.getPropertyValue('width'));
// console.log('width: ',slideWidth)


var active = 1;
var slider = document.getElementsByClassName("slider-long")[0];
var slides = slider.children;
var slide = slider.children[0];


var animator = new Animator(slider);

var navElement = document.getElementsByClassName('slider-wrapper')[0];
console.info('navElement:', navElement);

var navigate = new Navigator(navElement);
navigate.generateNavigator(slides.length, slideWidth);
navigate.mark(active);


function slideImage(){
	
	console.info('say hello');
	active = active == slides.length ? active = 1 : ++active;
	var ml = (slideWidth * (active-1) * -1);
	console.info('ml: ',ml);

	animator.animate('margin-left',ml,1000);
	navigate.mark(active);
}
// var intervalId= window.setInterval(slideImage, 3000);

function showNext(){
	if(active!=slides.length){
		// animator.finish();	
		// window.clearInterval(intervalId);
		active++;
		var ml = (slideWidth * (active-1) * -1);
		animator.animate("margin-left",ml,1000);
		navigate.mark(active);
		// intervalId=setInterval(slideImage, 3000);	
	}	
}

function showPrevious(){
	if(active!=1){
		// animator.finish();
		// window.clearInterval(intervalId);
		active--;
		var ml = (slideWidth * (active-1) * -1);
		animator.animate("margin-left",ml,1000);
		navigate.mark(active);
		// intervalId=setInterval(slideImage, 3000);
	}	
}


function changeSlide(slideIndex){
	// animator.finish();
	// window.clearInterval(intervalId);
	active = slideIndex+1;
	var ml = (slideWidth * (active-1) * -1);
	animator.animate("margin-left",ml,1000);
	navigate.mark(active);	
	// intervalId=setInterval(slide, 3000);

}