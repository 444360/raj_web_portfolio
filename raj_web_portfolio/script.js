// Initialize Barba.js for page transitions
barba.init({
  transitions: [
    {
      name: 'fade',
      leave(data) {
        return gsap.to(data.current.container, { opacity: 0 });
      },
      enter(data) {
        return gsap.from(data.next.container, { opacity: 0 });
      }
    }
  ]
});

// Smooth scrolling with Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-barba="container"]'),
  smooth: true,
});

// Refresh scroll on page transition
barba.hooks.after(() => {
  scroll.update();
});

// GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Animate items with data-scroll
document.querySelectorAll('[data-scroll]').forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});