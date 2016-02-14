/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


(function($) {
    "use strict"; // Start of use strict
    
   //Fancybox  
        //use portfolio-box for pics
            //switch back to portfolio-box to have it be fancybox popup
    $(document).ready(function() {
        $('.portfolio-box2').fancybox({
        padding: 0,
        helpers: {
        overlay: {
          locked: false
        }
        }
    });   
        //Use video-portfolio-box for media
   $('.fancybox-media').fancybox({
        padding:0,
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });


        //Use this when the preventDefault above prevents linking to another page
    $('a.link').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })


    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    $('#navbar').scrollspy({
    offset: -20
    });

    // Collapse the responsive navbar
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
        });


    // Initialize WOW.js Scrolling Animations
    new WOW().init();

//Scrolling to anchor. the 1500 refers to length of time to scroll. Increase to slow down. The 150 refers to the offset. Increase to offset higher.
    var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-143
    }, 1500);
    return false;
});

//Closing Function -- put all scripts above here
});



})(jQuery); // End of use strict






