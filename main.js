var controlsProgressEl = document.querySelector('.progress');
/*
// Create a timeline with default parameters
var tl = anime.timeline({
    targets: "div.griditem",
    easing: 'easeInOutSine',
    delay: 100,
    duration: 750,
    direction: 'alternate',
    update: function(anim) {
        controlsProgressEl.value = tl.progress;
    },
    loop: true,
    autoplay: false
});
  
  // Add children
tl
  .add({
    translateX: 250
  })
  .add({
    opacity: .5
  })
  .add({
    targets: '#dog3',
    rotate: 180
  })
  .add({
    translateX: 250
  })
document.querySelector('.play').onclick = tl.play;
document.querySelector('.pause').onclick = tl.pause;
document.querySelector('.restart').onclick = tl.restart;
document.querySelector('.reverse').onclick = tl.reverse;
controlsProgressEl.addEventListener('input', function() {
    tl.seek(tl.duration * (controlsProgressEl.value / 100));
  });
*/
/*
var translateXBy = 250;
var translateYBy = 250;
var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750,
  autoplay: false,
  loop: true
});

tl.add({
    targets: '#dog4',
    keyframes: [
      {translateX: translateXBy},
      {translateY: translateYBy},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
});
tl.add({
    targets: '#dog5',
    keyframes: [
      {translateY: -translateYBy},
      {translateX: translateXBy},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
}, 0);
tl.add({
    targets: '#dog6',
    keyframes: [
      {translateX: -translateXBy},
      {translateY: -translateYBy},
      {translateX: 0},
      {translateY: 0}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
}, 0);
*/
var tl = anime({
  targets: '.griditem',
  translateX: [
    { value: 250, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  translateY: [
    { value: -40, duration: 500 },
    { value: 40, duration: 500, delay: 1000 },
    { value: 0, duration: 500, delay: 1000 }
  ],
  translateX: [
    { value: 250, duration: 1000, delay: 500 },
    { value: 0, duration: 1000, delay: 500 }
  ],
  translateY: [
    { value: -40, duration: 500 },
    { value: 40, duration: 500, delay: 1000 },
    { value: 0, duration: 500, delay: 1000 }
  ],
  easing: 'easeOutElastic(1, .8)',
  update: function(anim) {
    controlsProgressEl.value = tl.progress;
  },
  loop: true,
  autoplay: false
});
document.querySelector('.play').onclick = tl.play;
document.querySelector('.pause').onclick = tl.pause;
document.querySelector('.restart').onclick = tl.restart;
document.querySelector('.reverse').onclick = tl.reverse;
controlsProgressEl.addEventListener('input', function() {
    tl.seek(tl.duration * (controlsProgressEl.value / 100));
  });