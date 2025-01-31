// let previousScrollY = window.scrollY;

// window.addEventListener("scroll", function () {
//   const currentScrollY = window.scrollY;
//   const scrollingElement = document.querySelector(".mainMineGif");
//   const headerTopInsideBodyTitleLeft = document.querySelector(
//     ".headerTopInsideBodyTitleLeft"
//   );
//   const watchIntro = document.querySelector(".watchIntro");
//   const bigStyledTextLeft = document.querySelector(".bigStyledTextLeft");
//   const bigStyledTextRight = document.querySelector(".bigStyledTextRight");
//   const headerTopInsideBodyTitleRight = document.querySelector(
//     ".headerTopInsideBodyTitleRight"
//   );
//   const mineGifFooter = document.querySelector(".mineGifFooter");
//   const mineInfo1 = document.querySelector(".mineInfo1");
//   const mineInfo2 = document.querySelector(".mineInfo2");
//   const mineInfo3 = document.querySelector(".mineInfo3");
//   const mineInfo4 = document.querySelector(".mineInfo4");

//   if (currentScrollY > previousScrollY) {
//     scrollingElement.classList.add("mainMineGifMove");

//     headerTopInsideBodyTitleLeft.style.animation =
//       "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
//     headerTopInsideBodyTitleLeft.style.animationDelay = "0.2s";

//     watchIntro.style.animation =
//       "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
//     watchIntro.style.animationDelay = "0.4s";

//     bigStyledTextLeft.style.animation =
//       "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
//     bigStyledTextLeft.style.animationDelay = "1.2s";

//     bigStyledTextRight.style.animation =
//       "slide-out-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
//     bigStyledTextRight.style.animationDelay = "1.2s";

//     headerTopInsideBodyTitleRight.style.animation =
//       "slide-out-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
//     headerTopInsideBodyTitleRight.style.animationDelay = "1.2s";

//     mineGifFooter.style.animation =
//       "slide-out-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
//     mineGifFooter.style.animationDelay = "1.6s";
//     mineInfo1.style.animation =
//       "slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineInfo1.style.animationDelay = "1s";
//     mineInfo2.style.animation =
//       "slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineInfo2.style.animationDelay = "1s";
//     mineInfo3.style.animation =
//       "slide-in-blurred-right 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineInfo3.style.animationDelay = "1s";
//     mineInfo4.style.animation =
//       "slide-in-blurred-right 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineInfo4.style.animationDelay = "1s";
//   } else if (currentScrollY < previousScrollY) {
//     scrollingElement.classList.remove("mainMineGifMove");

//     headerTopInsideBodyTitleLeft.style.animation =
//       "slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     headerTopInsideBodyTitleLeft.style.animationDelay = "0.2s";

//     watchIntro.style.animation =
//       "slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     watchIntro.style.animationDelay = "0.4s";

//     bigStyledTextLeft.style.animation =
//       "slide-in-blurred-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     bigStyledTextLeft.style.animationDelay = "1.2s";

//     bigStyledTextRight.style.animation =
//       "slide-in-blurred-right 1.2s cubic-bezier(0.23, 1, 0.32, 1) both";
//     bigStyledTextRight.style.animationDelay = "1.2s";

//     headerTopInsideBodyTitleRight.style.animation =
//       "slide-in-blurred-right 1.2s cubic-bezier(0.23, 1, 0.32, 1) both";
//     headerTopInsideBodyTitleRight.style.animationDelay = "0.6s";

//     mineGifFooter.style.animation =
//       "slide-in-blurred-bottom 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineGifFooter.style.animationDelay = "1.6s";

//     mineInfo1.style.animation =
//       "slide-out-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineInfo1.style.animationDelay = "0.1s";
//     mineInfo2.style.animation =
//       "slide-out-left 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineInfo2.style.animationDelay = "0.1s";
//     mineInfo3.style.animation =
//       "slide-out-right 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineInfo3.style.animationDelay = "0.1s";
//     mineInfo4.style.animation =
//       "slide-out-right 1s cubic-bezier(0.23, 1, 0.32, 1) both";
//     mineInfo4.style.animationDelay = "0.1s";
//   }
//   previousScrollY = currentScrollY;
// });

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const headerTopInsideBodyTitleLeft = entry.target.querySelector(
          ".headerTopInsideBodyTitleLeft"
        );
        const headerTopInsideBodyTitleRight = entry.target.querySelector(
          ".headerTopInsideBodyTitleRight"
        );
        const watchIntro = entry.target.querySelector(".watchIntro");
        const bigStyledTextLeft =
          entry.target.querySelector(".bigStyledTextLeft");
        const bigStyledTextRight = entry.target.querySelector(
          ".bigStyledTextRight"
        );

        const headerTopInsideScroll = entry.target.querySelector(
          ".headerTopInsideScroll"
        );
        const mineGifFooter = entry.target.querySelector(".mineGifFooter");

        const mineInfo1 = document.querySelector(".mineInfo1");
        const mineInfo2 = document.querySelector(".mineInfo2");
        const mineInfo3 = document.querySelector(".mineInfo3");
        const mineInfo4 = document.querySelector(".mineInfo4");

        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          if (headerTopInsideBodyTitleLeft) {
            headerTopInsideBodyTitleLeft.classList.remove("hidden");
            headerTopInsideBodyTitleLeft.classList.add("active");
          }
          if (headerTopInsideBodyTitleRight) {
            headerTopInsideBodyTitleRight.classList.remove("hidden");
            headerTopInsideBodyTitleRight.classList.add("active");
          }
          if (watchIntro) {
            watchIntro.classList.remove("hidden");
            watchIntro.classList.add("active");
          }
          if (bigStyledTextLeft) {
            bigStyledTextLeft.classList.remove("hidden");
            bigStyledTextLeft.classList.add("active");
          }
          if (bigStyledTextRight) {
            bigStyledTextRight.classList.remove("hidden");
            bigStyledTextRight.classList.add("active");
          }
          if (headerTopInsideScroll) {
            headerTopInsideScroll.classList.remove("hidden");
            headerTopInsideScroll.classList.add("active");
          }
          if (headerTopInsideScroll) {
            headerTopInsideScroll.classList.remove("hidden");
            headerTopInsideScroll.classList.add("active");
          }
          if (mineGifFooter) {
            mineGifFooter.classList.remove("hidden");
            mineGifFooter.classList.add("active");
          }
          if (mineInfo1) {
            mineInfo1.classList.remove("hidden");
            mineInfo1.classList.add("active");
          }
          if (mineInfo2) {
            mineInfo2.classList.remove("hidden");
            mineInfo2.classList.add("active");
          }
          if (mineInfo3) {
            mineInfo3.classList.remove("hidden");
            mineInfo3.classList.add("active");
          }
          if (mineInfo4) {
            mineInfo4.classList.remove("hidden");
            mineInfo4.classList.remove("active");
          }
        } else {
          entry.target.classList.remove("active");

          if (headerTopInsideBodyTitleLeft) {
            headerTopInsideBodyTitleLeft.classList.remove("active");
            headerTopInsideBodyTitleLeft.classList.add("hidden");
          }
          if (headerTopInsideBodyTitleRight) {
            headerTopInsideBodyTitleRight.classList.remove("active");
            headerTopInsideBodyTitleRight.classList.add("hidden");
          }
          if (watchIntro) {
            watchIntro.classList.remove("active");
            watchIntro.classList.add("hidden");
          }
          if (bigStyledTextLeft) {
            bigStyledTextLeft.classList.remove("active");
            bigStyledTextLeft.classList.add("hidden");
          }
          if (bigStyledTextRight) {
            bigStyledTextRight.classList.remove("active");
            bigStyledTextRight.classList.add("hidden");
          }
          if (headerTopInsideScroll) {
            headerTopInsideScroll.classList.remove("active");
            headerTopInsideScroll.classList.add("hidden");
          }
          if (mineGifFooter) {
            mineGifFooter.classList.remove("active");
            mineGifFooter.classList.add("hidden");
          }
          // if (mineInfo1) {
          //   mineInfo1.classList.add("active");
          // }
          // if (mineInfo2) {
          //   mineInfo2.classList.add("active");
          // }
          // if (mineInfo3) {
          //   mineInfo3.classList.add("active");
          // }
          // if (mineInfo4) {
          //   mineInfo4.classList.add("active");
          // }
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));
});
