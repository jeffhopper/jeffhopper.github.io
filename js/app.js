jQuery(document).ready(function($) {
    $('#menu a').click(function() {
        var center = $('#navigation');
        $('html,body').animate({ scrollTop: center.offset().top }, 400);
    });

    $('#video-scroll-play').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 400);
        $('#video').get(0).play();
    });

    $('video').hover(function toggleControls() {
        if (this.hasAttribute("controls")) {
            this.removeAttribute("controls")
        } else {
            this.setAttribute("controls", "controls")
        }
    });

    $('a#modal-button').click(function() {
        $('#modal').addClass('visible');
    });

    $('#close-button').click(function() {
        $('#modal').removeClass('visible');
    });
});