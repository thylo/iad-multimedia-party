const tvEl = document.querySelector(".js-tv");
const canvasEl = document.querySelector(".js-canvas");

const init = () => {
  const showConfetti = confetti.create(canvasEl, {
    resize: true,
    useWorker: true
  });

  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      showConfetti({ spread: 360 });
    }
  });

  tvEl.addEventListener("click", () => showConfetti({ spread: 300 }));
};

export { init };
