
$('.page').load('contentPages/main.html');

$('a').on('click', function(){
	event.preventDefault();
	var pageToLoad = $(this).closest('li').data('page');
	$('.page').load(pageToLoad);
	if(pageToLoad == 'contentPages/photos.html'){
		loadPhotos();
	}
});

function loadPhotos(){
	var dir = "images/photos_page/";
	var fileextension = ".jpg";
	$.ajax({
	  url: dir,
	  success: function (data) {
	    $(data).find("a:contains(" + fileextension + ")").each(function () {
	      var filename = this.href.replace(window.location.host, "").replace("http://", "");
	      $('.page').append($("<img src=" + dir + filename + "></img>"));
	    });
	  }
	});
}