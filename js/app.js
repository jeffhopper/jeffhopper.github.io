jQuery(document).ready(function($) {
    $('#enter a').click(function() {
        var center = $('#blueprint');
        $('html,body').animate({ scrollTop: center.offset().top }, 400);
    });

});