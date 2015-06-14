/*!
 * Flip
 *
 * MIT licensed
 * Copyright (C) 2013 Logan Butler, http://terum.us
 */

var damnItsTheBody = document.body;
var totalHeight = window.innerHeight;
var color1 = 'rgb(204, 204, 204)';
var color2 = 'rgb(255, 66, 66)';

var theWidth = 8256;
var theFrames = 24;
var thatWidth = theWidth / theFrames
var totalHeight = window.innerHeight;

var hand = document.querySelector( '.main' );

function App() {

    this.init = function() {
		window.onmousemove = function( event ) {

			var percentage = 1 - ( event.y / totalHeight );
			var color = fadeToColor(color1, color2, percentage)
			damnItsTheBody.style.backgroundColor = color;

			var segment = Math.floor( 24 * percentage );
			if ( segment > 23 ) {
    			segment = 23;
  			} else if ( segment < 0 ) {
  				segment = 0;
  			}

  			hand.style.backgroundPosition = ((-segment * thatWidth) + 'px 0px');
		}

		window.onresize = function() {
			totalHeight = window.innerHeight;
		}
    }
	function fadeToColor(rgbColor1, rgbColor2, ratio) {
	    var color1 = rgbColor1.substring(4, rgbColor1.length - 1).split(','),
	        color2 = rgbColor2.substring(4, rgbColor2.length - 1).split(','),
	        difference,
	        newColor = [];

	    for (var i = 0; i < color1.length; i++) {
	        difference = color2[i] - color1[i];
	        newColor.push(Math.floor(parseInt(color1[i], 10) + difference * ratio));
	    }

	    return 'rgb(' + newColor + ')';
	}
}

var app = new App();
app.init();