$(document).ready(function() {
	$('.ryu').mouseover(function()	{
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function()	{
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function()	{
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function()	{
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function()	{
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})
  /* keydown routine */
  /* changed 'mouseenter() to mouseover() to have Ryu return to 'ready' if mouse over 'ryu' while x is pressed */
  $(document).keydown(function(event) {
      /* console.log('key "x" pressed'); */
      if(event.keyCode == 88){
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-cool').show();
    }
  })
    .keyup(function(event) {
      $('.ryu-still').show();
      $('.ryu-cool').hide();
      (event.reset);
  })
});
function playHadouken ()	{
	$('#hadouken-sound')[0].volume= 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
