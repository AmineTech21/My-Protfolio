/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//Animation

//Battle-net
var battleNet = document.querySelectorAll('.image-abstraite');
var buffer = document.querySelectorAll('.image-about');
var code = document.querySelectorAll('.fa-code-branch');

anime({
  targets: battleNet,
  translateY: 30,
  endDelay: 0,
  duration: 1500,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: buffer,
  translateY: 30,
  endDelay: 0,
  duration: 1500,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: code,
  translateY: 8,
  endDelay: 0,
  duration: 1200,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

//Animation pour les ordinateurs

var pcRight = document.querySelectorAll('.right');
var pcLeft = document.querySelectorAll('.left');

anime({
  targets: pcRight,
  translateY: 30,
  endDelay: 0,
  duration: 1300,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: pcLeft,
  translateY: 40,
  endDelay: 0,
  duration: 1500,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

  