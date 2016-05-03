$(document).ready(function() {
	$('.ryu').mouseenter(function()	{
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function()	{
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function()	{
		console.log('mousedown');
		// play haudoken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// animate had to right of scrn
	})
	.mouseup(function()	{
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});