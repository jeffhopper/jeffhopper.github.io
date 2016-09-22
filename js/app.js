jQuery(document).ready(function($) {
    $('#save a').click(function() {
        var center = $('#blueprint');
        $('html,body').animate({ scrollTop: center.offset().top }, 400);
    });

});