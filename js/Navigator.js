function Navigator(element) {
	this.el = element;


	// generates the slider dots
	this.generateNavigator = function(imageNumber, slideWidth){
		var div = document.getElementsByClassName('slider-nav')[0];
		while(div.firstChild){
			div.removeChild(div.firstChild);
		}

		var ul = document.createElement('ul');
		ul.setAttribute('class','nav-ul')

		for(var i=0; i<imageNumber; i++){
			var li = document.createElement('li');
			var a = document.createElement('a');
			a.setAttribute('name', i)
			a.setAttribute('onclick', 'changeSlide('+i+')');
			li.appendChild(a)
			ul.appendChild(li);
		}

		var posLeft = slideWidth/2-20*imageNumber/2;
		div.style.left = posLeft +'px';

		div.appendChild(ul);
		element.appendChild(div);
	}

	// marks the active dot
	this.mark = function(active){
		var ul = document.getElementsByClassName('nav-ul')[0];

		for(var i=0; i<ul.children.length; i++){
			ul.children[i].children[0].style.backgroundColor = '#85A18C';
		}
		var li = ul.children[active-1];
		li.children[0].style.backgroundColor = "#e5493a";
	}
}
