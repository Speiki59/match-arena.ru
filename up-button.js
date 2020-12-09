let upButton = document.querySelector(".up-button");

// хз мне чет лень писать как работать обработчик анимации так что просто потом спросишь что да как
window.onscroll = function () {
  if (window.pageYOffset > 200) {
    if (upButton.classList.contains("up-button__hide")) {
      upButton.classList.remove("up-button__hide");
    }
    upButton.classList.add("up-button__show");
  } else {
    if (upButton.classList.contains("up-button__show")) {
      upButton.classList.remove("up-button__show");
      upButton.classList.add("up-button__hide");
    }
  }
};
const scrollToTop = () => {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
};
upButton.onclick = () => {
  scrollToTop();
};

// ВЫБОР ГОРОДА
const currentCity = document.querySelector(".city​-selection");
currentCity.innerHTML =
  window.location.href.split("/").pop().split(".").shift() === "prm" ? "пермь" : "екатеринбург";
