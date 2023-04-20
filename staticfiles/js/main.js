window.onscroll = function () {
    myFunction();
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  //	window.addEventListener("resize", function() {
  //		"use strict"; window.location.reload();
  //	});

  document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll(".dropdown-menu").forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });

    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
      // close all inner dropdowns when parent is closed
      document
        .querySelectorAll(".navbar .dropdown")
        .forEach(function (everydropdown) {
          everydropdown.addEventListener("hidden.bs.dropdown", function () {
            // after dropdown is hidden, then find all submenus
            this.querySelectorAll(".submenu").forEach(function (
              everysubmenu
            ) {
              // hide every submenu as well
              everysubmenu.style.display = "none";
            });
          });
        });

      document
        .querySelectorAll(".dropdown-menu a")
        .forEach(function (element) {
          element.addEventListener("click", function (e) {
            let nextEl = this.nextElementSibling;
            if (nextEl && nextEl.classList.contains("submenu")) {
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              console.log(nextEl);
              if (nextEl.style.display == "block") {
                nextEl.style.display = "none";
              } else {
                nextEl.style.display = "block";
              }
            }
          });
        });
    }
    // end if innerWidth
  });
  // DOMContentLoaded  end

// Typing text animation

var tl = gsap.timeline({
    repeat: 2, repeatDelay: 1
  });
  // letter animation
  tl.fromTo(".anim-typewriter", 8, {
    width: "0",
  }, {
    width: "20.18em", /* same as CSS .line-1 width */
    ease:  SteppedEase.config(37)
  }, 0);
  // text cursor animation
  tl.fromTo(".anim-typewriter", 0.5, {
    "border-right-color": "rgba(255,255,255,0.75)"
  }, {
    "border-right-color": "rgba(255,255,255,0)",
    repeat: -1,
    ease:  SteppedEase.config(37)
  }, 0);

  tl.play();