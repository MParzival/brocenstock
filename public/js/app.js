// Ekko lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(e){
    e.preventDefault();
    $(this).ekkoLightbox();
})

// animation navbar

$(window).scroll(function(){
    if ($(this).scrollTop() > 30) {
        $('.navbar').addClass('opaque');
    } else {
        $('.navbar').removeClass('opaque');
    }
})