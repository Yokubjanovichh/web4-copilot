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
