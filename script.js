// const anime = require('./anime.min.js');

wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("scroll", () => {
  console.log("keep scrollin' scrollin' scrollin'");

  let scrolled = window.wrapper.scrollY;
  console.log(scrolled);
});

title = document.querySelector(".title3");

title.addEventListener("click", () => {
  anime({
    targets: ".title",
    color: "rgba(255, 242, 0, 0)",
    translateZ: [100, 0],
    duration: 2016,
    loop: true,
  });
  anime({
    targets: ".title2",
    color: "rgba(197, 46, 0, 1)",
    scale: 0.8,
    translateY: [0, 100],
    duration: 1008,
    delay: 1008,
    direction: "alternate",
    loop: true,
  });
  anime({
    targets: ".title3",
    translateZ: [0, 100],
    duration: 2016,
    delay: 504,
    direction: "alternate",
    loop: true,
  });
});
