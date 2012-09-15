function Baloon ( n ) {
	this.number = n;
	target = $( "baloon-" + n );
}

Baloon.prototype.show = function () {
}

Baloon.prototype.setTimerDisplay = function ( h, m, s ) {
}

Baloon.prototype.hide = function () {
	
}

var b = new Baloon( 1 );
b.show();