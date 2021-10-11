
$.fn.parallax = function ( resistance, mouse ) 
{
	$el = $( this );
	TweenLite.to( $el, 0.2, 
	{
		x : -(( mouse.clientX - (window.innerWidth/2) ) / resistance ),
		y : -(( mouse.clientY - (window.innerHeight/2) ) / resistance )
	});

};

var sun = document.getElementById('sun');

document.body.addEventListener('mousemove', function (e) {
	var offset = sun.getBoundingClientRect();
	var left = e.pageX - offset.left;
	sun.style.boxShadow = '0px 0px ' + left/8 + 'px rgba(255, 255, 190, .75)';
});

$('section#background').mousemove( function( e ) {
			$( '.stars0' )	  .parallax( 10, e );
			$( '.stars1' )	  .parallax( 20	, e );
			$( '.stars2' )	  .parallax( 30	, e );
			$( '.planet0' )	  .parallax( 35	, e );
			$( '.stars3' )	  .parallax( 40	, e );
});
