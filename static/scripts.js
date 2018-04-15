$(document).ready(function(){
	function blackCircle() {
		return $(document.createElement('span')).addClass('black-circle')
	}
	$('#liver').annotatableImage(blackCircle);
});