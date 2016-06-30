$(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav();
      $('.materialboxed').materialbox();
});



$(function(){
        $(".element").typed({
          strings: ["<span class='terminalText'>dok@fsociety:~# <span class='white-text'>Hello, friend.</span></span>\n"+
          "<span class='terminalText'>dok@fsociety:~# ^1000<span class='white-text'>Welcome.</span></span>\n"+
          "<span class='terminalText'>dok@fsociety:~# ^1000<span class='white-text'>I'm Jorge.</span></span>\n"+
          "<span class='white-text'>just a <span id='tech'>tech</span> Front-end developer.</span>\n"+
          "^1000<span class='white-text'>Currently learning @ freecodecamp<br>An open source community <br>that helps you learn to code.</span>\n"+
          "^1000<span class='white-text'>Web developer, <br>i do stuff with javascript. </span>\n\n\n"+
          "^1000<span class='white-text'>~fsociety. </span>"],
          typeSpeed: 30,
          backDelay: 500,
          loop: false,
          loopCount: false,
          contentType: 'html'
        });
    });

    // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


 //I don't just hack you, Krista. I hack everyone, my friends, coworkers,
 //but I've helped a lot of people. I want a way out of loneliness,
 //just like you. Is that what you wanted to hear?
