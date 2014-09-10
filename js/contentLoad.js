
$('.page').load('contentPages/main.html');

$('a').on('click', function(){
	event.preventDefault();
	var pageToLoad = $(this).closest('li').data('page');
	$('.page').load(pageToLoad);
	console.log(pageToLoad);
});