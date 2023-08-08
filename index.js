let timer = document.querySelector(".timer");
let timerFor;
function timerCount() {
  let sec = 0;
  timerFor = setInterval(() => {
    if (sec == 100) {
      clearInterval(timerFor);
    }
    timer.innerHTML = sec;
    sec++;
  }, 16);
}
setTimeout(timerCount, 1500);

gsap
  .timeline()
  .from(".timer", { yPercent: 100, duration: 1, delay: 0.5 })
  .to(".timer", { opacity: 1 }, "<")
  .fromTo(
    ".centerLogoItemsStyle",
    { transformOrigin: "bottom", scaleY: 0 },
    { scaleY: 1, duration: 2, opacity: 1 }
  )
  .to(".timer", { top: 0, duration: 2 }, "<")
  .to(".timer", { yPercent: -100, duration: 1 })
  .fromTo(
    ".loadTextStyle",
    { y: 100, opacity: 0 },
    { y: 0, duration: 0.7, opacity: 1 },
    "-=0.5"
  )
  .fromTo(
    ".preLoaderTextRightSide",
    { y: 100, opacity: 0 },
    { y: 0, duration: 0.7, opacity: 1 },
    "<"
  )
  .fromTo(
    ".loaderLine",
    { duration: 1, transformOrigin: "right", opacity: 0, scaleY: 0 },
    { opacity: 1, scaleY: 1, duration: 0.7, display: "block" }
  )
  .to(".preLoaderTextLeftSide", { opacity: 1,left: 0, duration: 0.7 }, "<")
  .fromTo(
    ".loaderLine",
    { transformOrigin: "right", scaleX: 1 },
    { scaleX: 0, duration: 0.7 }
  )
  .to(".centerLogoItems", { opacity: 1,scale: 4, yPercent: -150, duration: 1.5 }, "<0.1")
  .to(".preLoaderTextRightSide", {
    y: -100,duration: 1
  }, "<0.4")
  .to(".wordReach", {
    y: -100,duration: 1
  },"<")
.to(".centerLogoItems",{y:-700,duration: 2,ease: "sine.out"},"-=0.5")
gsap.fromTo(".preLoader",{background: "black"}, {duration: 2,background: "radial-gradient(ellipse at 50% 90%, rgba(255, 255, 255, 1) 0%, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 1) 0%, rgba(217, 217, 217, 1) 35%, rgba(20, 20, 20, 1) 100%)"})
