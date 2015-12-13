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
				if((scFinal-sc)>=10){
					sc+=10;	
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