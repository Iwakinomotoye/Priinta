$(document).ready(function() {
	function open() {
		$('#nav-open').fadeOut(500);
		$('#nav-items').animate({width: '110%'}, 1000, function() {
			$('#nav-close').fadeIn();
		});
	}
	function close() {
		$('#nav-close').fadeOut("fast");
		$('#nav-items').animate({width: "0%"}, 1000, function() {
			$('#nav-open').fadeIn();
		})
	}
	$('body').click(function(event) {
		if(event.target.nodeName !== 'UL') {
			// check the width of the nav items so that you can use that one to know if
			// it is opened or closed.
			if(event.target == document.getElementById("nav-open")) {
				open();
			} else if(event.target == document.getElementById("nav-close")) {
				close();
			} else {
				close();
			}
		}
	})
})