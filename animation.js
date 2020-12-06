const animated = Array.from(document.querySelectorAll(".anim"));

animated.forEach(el => {
  var observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        entries[0].target.classList.add("animated_in");
      }
    },
    { threshold: [0.1] }
  );

  observer.observe(el);
});
