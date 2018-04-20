function handleScroll() {
	//creates a scroll effect when linking to other elements on the page
	$('a[href^="#"]').on('click', function(event) {
	    let target = $(this.getAttribute('href'));
	    if(target.length) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 600);
	    }
	});
}

$(handleScroll);