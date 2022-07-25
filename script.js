// const anime = require('./anime.min.js');

wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("scroll", () => {
  console.log("keep scrollin' scrollin' scrollin'");

  let scrolled = window.wrapper.scrollY;
  console.log(scrolled);
});

title = document.querySelector(".title");

title.addEventListener("click", () => {
  anime({
    targets: ".title",
    color: "rgba(255, 242, 0, 0)",
    scale: 0.4,
    duration: 5000,
    loop: true,
  });
  anime({
    targets: ".title2",
    color: "rgba(197, 46, 0, 1)",
    scale: 0.8,
    translateY: [0, 100],
    delay: 500,
    direction: "alternate",
    loop: true,
  });
  anime({
    targets: ".title3",
    translateZ: [0, 100],
    delay: 50,
    direction: "alternate",
    loop: true,
  });
});
