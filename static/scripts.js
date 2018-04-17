$(document).ready(function(){
	function blueCircle() {
		return $(document.createElement('span')).addClass('blue-circle')
	}

	$('#liver').annotatableImage(blueCircle);

	// $('#liver span.circle').seralizeAnnotations();
});

function greenCircle() {
	return $(document.createElement('span')).addClass('green-circle')
}
function blueCircle() {
	return $(document.createElement('span')).addClass('blue-circle')
}
function yellowCircle() {
	return $(document.createElement('span')).addClass('yellow-circle')
}

function changeCircle() {
	// var option = $('#annotation').find(":selected").value;
	var select = document.getElementById("annotation");
	var option = select.options[e.selectedIndex].value;
	console.log(option);
	if (option == 1) {
		$('#liver').annotatableImage(blueCircle);
	} else if (option == 2) {
		$('#liver').annotatableImage(greenCircle);
	} else {
		$('#liver').annotatableImage(yellowCircle);
	}
}