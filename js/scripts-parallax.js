//Parallax
const parallax_el = document.querySelectorAll(".parallax");
const animatedBtn = document.querySelector('.parallax-btn');
const parallaxText = document.querySelector('.text-parallax');
const vignette = document.querySelector('.vignette');
const bgParallax = document.querySelector('.bg-parallax');
const staticText = document.querySelector('.static-text-hero');
var isScrolling = false;
var scrollTimeout;

if (window.matchMedia("(min-width: 999px)").matches) {
  let xValue = 0, yValue = 0;

  let rotateDegree = 0;

  function updateParallax(cursorPosition) {
    parallax_el.forEach(el => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      let speedz = el.dataset.speedz;
      let rotateSpeed = el.dataset.rotation;

      let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
      let zValue = cursorPosition - parseFloat(getComputedStyle(el).left) * isInLeft;

      el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
             rotateY(${rotateDegree * rotateSpeed}deg)
             translateY(calc(-50% + ${yValue * speedy}px)) 
             perspective(2300px) translateZ(${zValue * speedz}px)`;
    });
  };

  updateParallax(0);

  document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (!timeline.isActive()) {
      isScrolling = true;

      parallaxText.style.transform = "translate(-50%, " + (scrollPosition / 2 - 50) + "px)";

      if (scrollPosition == 0)
        parallaxText.style.transform = "translate(-50%, -50%)";

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(function () {
        isScrolling = false;
      }, 500);
    }
  });

  window.addEventListener("mousemove", (e) => {
    if (timeline.isActive()) {
      animatedBtn.classList.add('disable-hover');
      return;
    } else
      animatedBtn.classList.remove('disable-hover');

    if (!isScrolling) {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
      updateParallax(e.clientX);
    };
  });

  // GSAP animation
  let timeline = gsap.timeline();

  Array.from(parallax_el)
    .filter((el) => !el.classList.contains("text-parallax") && !el.classList.contains("fg-00"))
    .forEach((el) => {
      timeline.from(
        el,
        {
          top: `${(el.offsetHeight / 2) + +el.dataset.distance}px`,
          duration: 2,
          ease: "power3.out",
        },
        "1"
      );
    });

  // Text animation
  timeline.from(".text-parallax h2", {
    y: window.innerHeight - document.querySelector(".text-parallax h2").getBoundingClientRect().top + 200,
    duration: 2,
    ease: "power3.out",
  },
    "2.5"
  ).from(".text-parallax .parallax-btn", {
    y: window.innerHeight - document.querySelector(".text-parallax .parallax-btn").getBoundingClientRect().top + 200,
    duration: 2,
    ease: "power3.out",
  },
    "3"
  ).from(".text-parallax h1", {
    y: -150,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
  },
    "3.5"
  ).from(".hide", {
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
  },
    "3.5"
  )
} else {
  bgParallax.classList.add("show-parallax");
  staticText.classList.add("show-parallax");

  parallax_el.forEach(el => el.classList.add("hide-parallax"));
  vignette.classList.add("hide-parallax");
};
