document.addEventListener("DOMContentLoaded", function() {

// LOADER
    function onReady(callback) {
        var intervalID = window.setInterval(checkReady, 2000);

        function checkReady() {
            if (document.getElementsByTagName('body')[0] !== undefined) {
                window.clearInterval(intervalID);
                callback.call(this);
            }
        }
    }

    function show(id, value) {
        document.getElementById(id).style.display = value ? 'block' : 'none';
    }

    onReady(function() {
        show('wrapper', true);
        show('loader', false);
    });



    // CONTENT VARIABLES 
    var menuButton = document.getElementById('menu-button');
    var contentContainer = document.getElementById('content');
    var title = document.getElementById('title');
    var backButton = document.getElementById('back');




    // SLIDE UP CONTENT
    menuButton.addEventListener('click', function() {
        title.className += ' fade';
        contentContainer.className += ' show';
    });

    // SLIDE DOWN CONTNET 
    backButton.addEventListener('click', function() {
        title.className -= ' fade';
        contentContainer.className -= ' show';
    });

    // MUTE BUTTON
    var video = document.getElementById('sbb-video');
    var volumeButton = document.getElementById('volume-button');
    volumeButton.addEventListener('click', function() {
        if (video.muted == false) {
            video.muted = true
        } else {
            video.muted = false
        }
    });


    // SLIDE UP CONTENT
    // $('#menu-button').click(function() {
    //     $('#menu-button').fadeOut(500)
    //     $('#content').addClass('show')
    //         // $('h1').addClass('fade-in')
    //     $('h1').hide().delay(600).fadeIn(300)
    // });


    // SLIDE DOWN CONTENT
    // $('#back').click(function() {
    //     $('#menu-button').delay(300).fadeIn(300)
    //     $('h1').fadeOut(200)

    //     function hideContent() {
    //         setTimeout(function() {
    //             $('#content').removeClass('show');
    //         }, 200);
    //     };
    //     hideContent();
    // });


    // var video = $('#sbb-video');
    //    $('#volume-button').click(function videoSound() {
    //        if (video.hasAttribute("muted")) {
    //            video.removeAttribute("muted")
    //        } else {
    //            video.setAttribute("muted", "muted")
    //        };
    //    });

    // FADE IN CONTENT
    // $('#content').hide();
    // $('#menu-button').click(function() {
    //     $('#content').delay(100).fadeIn(300)
    //     $('#menu-button').fadeOut(500)
    // });


    // FADE OUT CONTENT
    // $('#video-button').click(function() {
    //     $('#menu-button').fadeIn(300)
    //     $('#content').delay(100).fadeOut(300)

});