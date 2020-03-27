
var textWrapper = document.querySelector('.indexBanner .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.indexBanner .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.indexBanner',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });