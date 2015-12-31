console.log('start');


var slide = document.getElementsByClassName('slide')[0];
var style = window.getComputedStyle(slide);
var slideWidth= parseInt(style.getPropertyValue('width'));

var active = 1;
var slider = document.getElementsByClassName("slider-long")[0];
var slides = slider.children;
var slide = slider.children[0];

var animator = new Animator(slider);

var navElement = document.getElementsByClassName('slider-wrapper')[0];

var navigate = new Navigator(navElement);
navigate.generateNavigator(slides.length, slideWidth);
navigate.mark(active);


function slideImage(){
	active = active == slides.length ? active = 1 : ++active;
	var ml = (slideWidth * (active-1) * -1);
	animator.animate('margin-left',ml,1000);
	navigate.mark(active);
}
var intervalId= window.setInterval(slideImage, 3000);


function showNext(){
	if(active!=slides.length){
		animator.finish();
		window.clearInterval(intervalId);
		active++;
		var ml = (slideWidth * (active-1) * -1);
		animator.animate("margin-left",ml,1000);
		navigate.mark(active);
		intervalId=setInterval(slideImage, 3000);
	}
}


function showPrevious(){
	if(active!=1){
		animator.finish();
		window.clearInterval(intervalId);
		active--;
		var ml = (slideWidth * (active-1) * -1);
		animator.animate("margin-left",ml,1000);
		navigate.mark(active);
		intervalId=setInterval(slideImage, 3000);
	}
}


function changeSlide(slideIndex){
	animator.finish();
	window.clearInterval(intervalId);
	active = slideIndex+1;
	var ml = (slideWidth * (active-1) * -1);
	animator.animate("margin-left",ml,1000);
	navigate.mark(active);
	intervalId=setInterval(slideImage, 3000);

}


window.onresize = function(){
	// console.log("resize");
	var styl = window.getComputedStyle(slide);
	slideWidth= parseInt(styl.getPropertyValue('width'));
	navigate.generateNavigator(slides.length, slideWidth);
	navigate.mark(active);

	alignIcon();
}


window.addEventListener('focus', function(){
	intervalId=setInterval(slideImage, 3000);
});


window.addEventListener('blur', function(){
	animator.finish();
	window.clearInterval(intervalId);
});



var achievCounter = document.getElementsByClassName('achievement-counter')[0];
var achievCounter1 = document.getElementsByClassName('achievement-counter')[1];
var achievCounter2 = document.getElementsByClassName('achievement-counter')[2];
var achievCounter3 = document.getElementsByClassName('achievement-counter')[3];

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document. documentElement.clientWidth) /*or $(window).width() */ &&
        rect.top < (window.innerHeight || document. documentElement.clientHeight) /*or $(window).height() */;
}


var sc=0, cp=0, loa=0, wl=0;
var scFinal = 6587;
var cpFinal = 896;
var loaFinal = 1674;
var wlFinal = 769;

var counterInterval = window.setInterval(function(){
	if(isElementInViewport(achievCounter)){
		var intId = window.setInterval(function(){

			if(scFinal!=sc){
				if((scFinal-sc)>=20){
					sc+=20;
				}else{
					sc+=1;
				}
			}

			if(cpFinal!=cp){
				if((cpFinal-cp)>=5){
					cp+=5;
				}else{
					cp+=1;
				}
			}

			if(loaFinal!=loa){
				if((loaFinal-loa)>=5){
					loa+=5;
				}else{
					loa+=1;
				}
			}

			if(wlFinal!=wl){
				if((wlFinal-wl)>=5){
					wl+=5;
				}else{
					wl+=1;
				}
			}

			achievCounter.innerHTML = sc;
			achievCounter1.innerHTML = cp;
			achievCounter2.innerHTML = loa;
			achievCounter3.innerHTML = wl;
			if(sc==scFinal && cp==cpFinal && loa==loaFinal && wl==wlFinal){
				window.clearInterval(intId);
			}
		},1);
		window.clearInterval(counterInterval);
	}
},500);


function scrollToTop(){
	var position = parseInt(document.body.scrollTop);
	
	var scrollInterval = setInterval(function(){
		position-=50;
		window.scroll(0,position);

		if(position<=0){
			clearInterval(scrollInterval);
		}
	},10);
}


window.onload = function(){
	alignIcon();
}


function alignIcon(){
	var overlayIconWrapper = document.getElementsByClassName('overlay-icon-wrapper')[0];
	
	var overlayIcon = document.getElementsByClassName('overlay-icons');

	var style = window.getComputedStyle(overlayIconWrapper);
	
	var pHeight = parseFloat(style.getPropertyValue('height'));

	for (var i = overlayIcon.length - 1; i >= 0; i--) {
		overlayIcon[i].style.paddingTop = (pHeight-42)/2 +'px';
	};
}
