
//COMPANYS class toggle
document
  .querySelector(".companys__read-more")
  .addEventListener("click", function (e) {
    document
      .querySelector(".companys__container")
      .classList.toggle("companys--container-open");
  });

// function checkWidthForSlider(params) {
//   let mql =  window.matchMedia("(max-width: 600px)");
//   if (mql) {}

// }

//SLIDER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
  centeredSlides: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Read-more button toggle

const crmEls = document.querySelectorAll('[class*="read-more"]');
console.log(crmEls);
crmEls.forEach(crmEl => {
  crmEl.addEventListener("click", function (e) {
    crmEl.classList.toggle("read-more--open");
    let textEl = crmEl.querySelector("span").textContent;
    if (textEl == "Читать далее") {
      textEl = "Скрыть";
    } else {
      textEl = "Читать далее";
    }
    crmEl.querySelector("span").textContent = textEl;
  });
});