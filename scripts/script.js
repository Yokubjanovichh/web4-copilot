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

        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          if (entry.target === sections[0]) {
            // Birinchi section
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
            // Ikkinchi section
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
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));

  // Scroll hodisasini faqat bir marta qo‘shamiz
  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY > previousScrollY) {
      // Pastga harakat
      if (sections[1].classList.contains("active")) {
        scrollingElement.classList.add("mainMineGifMove");
      }
    } else {
      // Tepaga harakat
      if (sections[0].classList.contains("active")) {
        scrollingElement.classList.remove("mainMineGifMove");
      }
    }

    previousScrollY = currentScrollY;
  });
});
