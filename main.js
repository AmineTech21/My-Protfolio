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

//Animation for the coding languages
/*
var html5 = document.querySelectorAll('.fa-html5');
var css3 = document.querySelectorAll('.fa-css3-alt');
var javascript = document.querySelectorAll('.fa-js');
var bootstrap = document.querySelectorAll('.fa-bootstrap');
var php = document.querySelectorAll('.fa-php');
var github = document.querySelectorAll('.icons .fa-github');
var git = document.querySelectorAll('.fa-git-alt');
var react = document.querySelectorAll('.fa-react');
var devOps = document.querySelectorAll('.fa-user-secret');



anime({
  targets: html5,
  translateY: 10,
  endDelay: 0,
  duration: 1000,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: css3,
  translateY: 8,
  endDelay: 0,
  duration: 1200,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: javascript,
  translateY: 10,
  endDelay: 0,
  duration: 1000,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: bootstrap,
  translateY: 8,
  endDelay: 0,
  duration: 1200,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: php,
  translateY: 10,
  endDelay: 0,
  duration: 1000,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: github,
  translateY: 8,
  endDelay: 0,
  duration: 1200,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: git,
  translateY: 10,
  endDelay: 0,
  duration: 1000,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: react,
  translateY: 8,
  endDelay: 0,
  duration: 1200,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});

anime({
  targets: devOps,
  translateY: 10,
  endDelay: 0,
  duration: 1000,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true,
});
*/
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

  