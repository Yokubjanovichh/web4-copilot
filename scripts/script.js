let previousScrollY = window.scrollY;
const scrollingElement = document.querySelector(".mainMineGif");

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const headerTopElements = document.querySelectorAll(
          ".headerTopInsideBodyTitleLeft, \
            .headerTopInsideBodyTitleRight, \
            .watchIntro, \
            .bigStyledTextLeft, \
            .bigStyledTextRight, \
            .headerTopInsideScroll, \
            .mineGifFooter"
        );

        const mineInfos = document.querySelectorAll(
          ".mineInfo1, \
            .mineInfo2, \
            .mineInfo3, \
            .mineInfo4"
        );

        const screen3Container = document.querySelectorAll(
          ".screen3ContainerWrapper,\
          .screen3ContainerWrapperLeft, \
          .screen3ContainerWrapperRight"
        );

        const screen4Container = document.querySelectorAll(
          ".robotHeadRightCircle,\
          .robotHeadRightCircleImg, \
          .textIconWrapper,\
          .screen4ContainerTitle,\
          .textIconWrapper1,\
           .textIconWrapper2,\
          .textIconWrapper3, \
          .textIconWrapper4"
        );

        const screen5Container = document.querySelectorAll(
          ".screen5ContainerMainLeft,\
          .screen5ContainerMainRight"
        );

        const screen6Container = document.querySelectorAll(
          ".screen6ContainerMainLeft,\
          .screen6ContainerMainRight"
        );

        const screen7Container = document.querySelectorAll(
          ".screen7ContainerMainTop,\
          .screen7ContainerMainBottom"
        );

        const screen8Container = document.querySelectorAll(
          ".screen8ContainerMainLeft,\
          .creatorFirst, \
          .creatorSecond,\
          .creatorThird"
        );

        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          if (entry.target === sections[0]) {
            headerTopElements?.forEach((el) => {
              el?.classList.remove("hidden");
              el?.classList.add("active");
            });

            scrollingElement.classList.remove("mainMineGifMove");
          } else {
            headerTopElements?.forEach((el) => {
              el?.classList.remove("active");
              el?.classList.add("hidden");
            });
          }

          if (entry.target === sections[1]) {
            mineInfos?.forEach((el) => {
              el?.classList.remove("hidden");
              el?.classList.add("active");
            });
            scrollingElement.classList.add("mainMineGifMove");
          } else {
            mineInfos?.forEach((el) => {
              el?.classList.remove("active");
              el?.classList.add("hidden");
            });
          }

          if (entry.target === sections[2]) {
            screen3Container?.forEach((el) => {
              el?.classList.remove("hidden");
              el?.classList.add("active");
            });
          } else {
            screen3Container?.forEach((el) => {
              el?.classList.remove("active");
              el?.classList.add("hidden");
            });
          }

          if (entry.target === sections[3]) {
            screen4Container?.forEach((el) => {
              el?.classList.remove("hidden");
              el?.classList.add("active");
            });
          } else {
            screen4Container?.forEach((el) => {
              el?.classList.remove("active");
              el?.classList.add("hidden");
            });
          }

          if (entry.target === sections[4]) {
            screen5Container?.forEach((el) => {
              el?.classList.remove("hidden");
              el?.classList.add("active");
            });
          } else {
            screen5Container?.forEach((el) => {
              el?.classList.remove("active");
              el?.classList.add("hidden");
            });
          }

          if (entry.target === sections[5]) {
            screen6Container?.forEach((el) => {
              el?.classList.remove("hidden");
              el?.classList.add("active");
            });
          } else {
            screen6Container?.forEach((el) => {
              el?.classList.remove("active");
              el?.classList.add("hidden");
            });
          }

          if (entry.target === sections[6]) {
            screen7Container?.forEach((el) => {
              el?.classList.remove("hidden");
              el?.classList.add("active");
            });
          } else {
            screen7Container?.forEach((el) => {
              el?.classList.remove("active");
              el?.classList.add("hidden");
            });
          }

          if (entry.target === sections[7]) {
            screen8Container?.forEach((el) => {
              el?.classList.remove("hidden");
              el?.classList.add("active");
            });
          } else {
            screen8Container?.forEach((el) => {
              el?.classList.remove("active");
              el?.classList.add("hidden");
            });
          }
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY > previousScrollY) {
      if (sections[1].classList.contains("active")) {
        scrollingElement.classList.add("mainMineGifMove");
      }
    } else {
      if (sections[0].classList.contains("active")) {
        scrollingElement.classList.remove("mainMineGifMove");
      }
    }

    previousScrollY = currentScrollY;
  });
});

// change bg image

document.addEventListener("DOMContentLoaded", function () {
  const rightBox1 = document.querySelector(".rightBox1");
  const rightBox3 = document.querySelector(".rightBox3");
  const rightBox4 = document.querySelector(".rightBox4");
  const rightBox6 = document.querySelector(".rightBox6");
  const rightBox7 = document.querySelector(".rightBox7");

  const leftContainer = document.querySelector(".screen6ContainerMainLeft");

  rightBox1.addEventListener("click", function () {
    leftContainer.style.backgroundImage =
      "url('../assets/images/screen6/example2.png')";
  });
  rightBox3.addEventListener("click", function () {
    leftContainer.style.backgroundImage =
      "url('../assets/images/screen6/example4.png')";
  });

  rightBox4.addEventListener("click", function () {
    leftContainer.style.backgroundImage =
      "url('../assets/images/screen6/example1.png')";
  });

  rightBox6.addEventListener("click", function () {
    leftContainer.style.backgroundImage =
      "url('../assets/images/screen6/example4.png')";
  });

  rightBox7.addEventListener("click", function () {
    leftContainer.style.backgroundImage =
      "url('../assets/images/screen6/example5.png')";
  });
});
