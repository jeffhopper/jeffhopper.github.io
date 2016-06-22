jQuery(document).ready(function($) {
    $("#burger").click(function() {
        $("nav ul").toggleClass("slide");
        $('#burger').hide();
        $('#close').show();
    });
    $('#close').click(function() {
        $("nav ul").toggleClass("slide");
        $('#burger').show();
        $('#close').hide();
    });
});