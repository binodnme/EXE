function Navigator(element) {
	this.el = element;

	this.generateNavigator = function(imageNumber, slideWidth){
		var div = document.createElement('div');
		div.setAttribute('class', 'nav');
		div.style.position= 'absolute';
		var ul = document.createElement('ul');

		for(var i=0; i<imageNumber; i++){
			var li = document.createElement('li');
			var a = document.createElement('a');
			a.setAttribute('href','#');
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

	this.mark = function(active){
		var ul = document.getElementsByTagName("ul")[0];

		for(var i=0; i<ul.children.length; i++){
			ul.children[i].children[0].style.backgroundColor = '#85A18C';
		}
		var li = ul.children[active-1];
		li.children[0].style.backgroundColor = "#e5493a";
	}
}