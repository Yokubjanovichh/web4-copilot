// window.addEventListener("scroll", function () {
// const scrollingElement = document.querySelector(".mainMineGif");
//   scrollingElement.style.bottom = "-120vh";

//   const element = document.querySelector(".mainMineGif");
//   const rect = element.getBoundingClientRect();

//   //   console.log("Left:", rect.left); // Левая граница элемента относительно окна браузера
//   //   console.log("Top:", rect.top); // Верхняя граница элемента относительно окна браузера
//   //   console.log("Right:", rect.right);
//   //   console.log("Bottom:", rect.bottom);

//   //   if (rect.bottom > 350) {
//   //     scrollingElement.style.top = rect.top + 200 + "px";
//   //   } else {
//   //     scrollingElement.style.top = window.scrollY + "px";
//   //   }
// });

let previousScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const currentScrollY = window.scrollY;
  const scrollingElement = document.querySelector(".mainMineGif");
  const headerTopInsideBodyTitleLeft = document.querySelector(
    ".headerTopInsideBodyTitleLeft"
  );
  const watchIntro = document.querySelector(".watchIntro");
  const bigStyledTextLeft = document.querySelector(".bigStyledTextLeft");
  const bigStyledTextRight = document.querySelector(".bigStyledTextRight");
  const headerTopInsideBodyTitleRight = document.querySelector(
    ".headerTopInsideBodyTitleRight"
  );
  const mineGifFooter = document.querySelector(".mineGifFooter");

  if (currentScrollY > previousScrollY) {
    scrollingElement.style.bottom = "-100vh";
    scrollingElement.style.width = "calc(1082 / 19.2 * 1vw)";
    scrollingElement.style.height = "calc(600 / 19.2 * 1vw)";
    scrollingElement.style.backgroundPosition = "top";
    scrollingElement.style.backgroundSize = "cover 120%";
    scrollingElement.style.left = "calc(422/19.2*1vw)";

    headerTopInsideBodyTitleLeft.style.animation =
      "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    headerTopInsideBodyTitleLeft.style.animationDelay = "0.2s";

    watchIntro.style.animation =
      "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    watchIntro.style.animationDelay = "0.4s";

    bigStyledTextLeft.style.animation =
      "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    bigStyledTextLeft.style.animationDelay = "1.2s";

    bigStyledTextRight.style.animation =
      "slide-out-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    bigStyledTextRight.style.animationDelay = "1.2s";

    headerTopInsideBodyTitleRight.style.animation =
      "slide-out-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    headerTopInsideBodyTitleRight.style.animationDelay = "1.2s";

    mineGifFooter.style.animation =
      "slide-out-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    mineGifFooter.style.animationDelay = "1.6s";
  } else if (currentScrollY < previousScrollY) {
    scrollingElement.style.bottom = "10vh";
    scrollingElement.style.width = "calc(770 / 19.2 * 1vw)";
    scrollingElement.style.height = "calc(700 / 19.2 * 1vw)";
    scrollingElement.style.backgroundSize = "cover";
    scrollingElement.style.left = "calc(651/19.2*1vw)";

    headerTopInsideBodyTitleLeft.style.animation =
      "slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
    headerTopInsideBodyTitleLeft.style.animationDelay = "0.2s";

    watchIntro.style.animation =
      "slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
    watchIntro.style.animationDelay = "0.4s";

    bigStyledTextLeft.style.animation =
      "slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
    bigStyledTextLeft.style.animationDelay = "1.2s";

    bigStyledTextRight.style.animation =
      "slide-in-blurred-right 1.2s cubic-bezier(0.23, 1, 0.32, 1) both";
    bigStyledTextRight.style.animationDelay = "1.2s";

    headerTopInsideBodyTitleRight.style.animation =
      "slide-in-blurred-right 1.2s cubic-bezier(0.23, 1, 0.32, 1) both";
    headerTopInsideBodyTitleRight.style.animationDelay = "0.6s";

    mineGifFooter.style.animation =
      "slide-in-blurred-bottom 1s cubic-bezier(0.23, 1, 0.32, 1) both";
    mineGifFooter.style.animationDelay = "1.6s";
  }
  previousScrollY = currentScrollY;
});
