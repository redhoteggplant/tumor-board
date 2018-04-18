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
	var e = document.getElementById("annotation");
	var option = e.options[e.selectedIndex].value;
	
	if (option == 1) {
		$('#liver').annotatableImage(blueCircle);
	} else if (option == 2) {
		$('#liver').annotatableImage(greenCircle);
	} else {
		$('#liver').annotatableImage(yellowCircle);
	}
}

function addEntry() {
	var table = document.getElementById("table1");
	var row = table.insertRow(0);
	var cell = row.insertCell(0);
	var e = document.getElementById("annotation");
	cell.innerHTML = e.options[e.selectedIndex].text;
}