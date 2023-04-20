// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".typing-text", {
//     scrollTriegger: ".typing-text",
//     duration: 3
// })

// based on the super awesome demo by @osublake
// https://codepen.io/osublake/pen/QWyLVLO

console.clear();

const svg = document.querySelector("#svg");
const img = document.querySelector(".digital_tech");
const circle = document.querySelector("#circle");
const pad = 4;

let radius = +circle.getAttribute("r");
let imgWidth, imgHeight;

gsap.set(img, {
  scale: 2,
  xPercent: 0,
  yPercent: -50
});

var tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.image-unmask',
      pin: true,
      start: "top top",
      end: '+=5000 bottom',
//      end: "bottom bottom",
      scrub: 1,
    },
    defaults: {
      duration: 1
    }
  })
  .to(circle, {
    attr: {
      r: () => radius
    }
  }, 0)
  .to(img, {
    scale: 1,
    opacity: 1,
  }, 0)
  .to("#whiteLayer", {
    alpha: 0,
    ease: "power1.in",
    duration: 1 - 0.25
  }, 0.25)
;



window.addEventListener("load", init);
window.addEventListener("resize", resize);

function init() {

  imgWidth = img.naturalWidth;
  imgHeight = img.naturalHeight;

  resize();
}

function resize() {

  tl.progress(0);

  const r = svg.getBoundingClientRect();
  const rectWidth = r.width + pad;
  const rectHeight = r.height + pad;

  const rx = rectWidth / imgWidth;
  const ry = rectHeight / imgHeight;

  const ratio = Math.max(rx, ry);

  const width = imgWidth * ratio;
  const height = imgHeight * ratio;

  const dx = rectWidth / 2;
  const dy = rectHeight / 2;
  radius = Math.sqrt(dx * dx + dy * dy);

  gsap.set(img, { width, height });

  tl.invalidate();

  ScrollTrigger.refresh();

}
//let bgImage = document.querySelector(".image-unmask");
//gsap.fromTo(
//    bgImage,
//    {
//      clipPath: "circle(5% at 77% 40%)",
//    },
//    {
//      clipPath: "circle(75% at 50% 50%)",
//      ease: "none",
//      //  We want to do that animation on scroll
//      scrollTrigger: {
//        trigger: bgImage,
//        scrub: 1,
//        start: "top top",
//        end: "top center-=200",
//      },
//    }
//  );