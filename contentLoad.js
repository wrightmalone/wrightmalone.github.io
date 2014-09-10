$(document).ready(function(){
	$('.page').text('page goes here');
	$('button').on('click', function(){
		var page = $('this').closest('li').data('page');
		$('.page').load(page);
	});
});