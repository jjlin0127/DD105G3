

window.addEventListener('load', function () {

  let hamburger = document.getElementById("hamburger");
  let hamburgerMenu = document.getElementById("rwdHamburgerMenu");

  hamburger.onclick = function () {
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.remove("is-active");
      hamburgerMenu.style.left = "100%";

      // 解開畫面
<<<<<<< HEAD
      if ($(document).height() > $(window).height()) {
        $("html").removeClass("noscroll");
      } else {
        $("html").removeClass("fixWindow");
      }
=======
      // if ($(document).height() > $(window).height()) {
      //   $("html").removeClass("noscroll");
      // } else {
      //   $("html").removeClass("fixWindow");
      // }
>>>>>>> 6f49b77d50069adfd005e3927ec1a033964af516

    } else {
      hamburger.classList.add("is-active");
      hamburgerMenu.style.left = "0%";

      // 鎖住畫面
<<<<<<< HEAD
      if ($(document).height() > $(window).height()) {
        $("html").addClass("noscroll");
      } else {
        $("html").addClass("fixWindow");
      }
=======
      // if ($(document).height() > $(window).height()) {
      //   $("html").addClass("noscroll");
      // } else {
      //   $("html").addClass("fixWindow");
      // }
>>>>>>> 6f49b77d50069adfd005e3927ec1a033964af516

    }
  }})

