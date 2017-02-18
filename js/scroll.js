$(".scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".container-fluid").offset().top},
        'slow');
});

