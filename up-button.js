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

upButton.onclick = () => window.scrollTo({ top: 0 });

// ВЫБОР ГОРОДА
const currentCity = document.querySelector(".city​-selection");
currentCity.innerHTML =
  window.location.href.split("/").pop().split(".").shift() === "prm" ? "пермь" : "екатеринбург";

// КНОПОЧКА БРОНИРОВАНИЯ
function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
setTimeout(function (event) {
  const bookBTN = document.getElementById("bookform-floating-button");
  const myBookBTN = document.getElementById("self_book_btn");
  myBookBTN.addEventListener("click", () => eventFire(bookBTN, "click"));
}, 300);
