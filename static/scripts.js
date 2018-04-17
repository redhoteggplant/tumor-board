$(document).ready(function(){

	function greenCircle() {
		return $(document.createElement('span')).addClass('green-circle')
	}
	function blueCircle() {
		return $(document.createElement('span')).addClass('blue-circle')
	}
	function yellowCircle() {
		return $(document.createElement('span')).addClass('yellow-circle')
	}

	$('#liver').annotatableImage(blueCircle);

	var annotation = $('#annotation').find(":selected").text();
	// $('#liver span.circle').seralizeAnnotations();
});