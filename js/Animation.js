function Animator(element) {
	this.el = element;
	
	var animationIntervalId;
	this.animation = false;
	this.finalValue = 0;
	this.property;
	
	//animates the slider
	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);
		this.finalValue = value;
		this.property = cssProperty;
		var tempInitial = initial;

		var intervalLength = 10;

		var step = (value - initial) / (duration / intervalLength);
		
		animationIntervalId = intervalTrigger(initial, cssProperty, step, duration,intervalLength);
		
	}

	function intervalTrigger(initial, cssProperty, step, duration, intervalLength){
		var counter=0;
		var tempInitial = initial;
		var intervalId= window.setInterval(function() {
			this.animation = true;
			counter++;
			tempInitial+=step;
			element.style[cssProperty] = tempInitial + 'px';
			if (counter >= duration/intervalLength){
				window.clearInterval(intervalId);
				this.animation = false;
			}
		}, intervalLength);

		return intervalId;
	}

	// should stop the animation in current position
	this.stopAnim = function() {
		if(this.animation ==true){
			console.log('animation stopped');
			window.clearInterval(animationIntervalId);
			animation = false;	
		}
		
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function() {
		window.clearInterval(animationIntervalId);
		var style = window.getComputedStyle(element);
		console.log('final value: ',this.finalValue);
		element.style[this.property] = this.finalValue + 'px';
		this.animation==false;
		
	}
}