var modalLink = document.querySelector(".button-form");
var modalPopup = document.querySelector(".modal");
var checkIn = document.querySelector(".calendar-entry")
var modalForm = document.querySelector(".modal-form")
var checkOut = document.querySelector(".calendar-departure")

modalPopup.classList.remove("modal-show");

modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.toggle("modal-show");
    checkIn.focus();
  });

modalForm.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-error");
      modalPopup.offsetWidth = modalPopup.offsetWidth;
      modalPopup.classList.add("modal-error");
    } 
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        modalPopup.classList.remove("modal-show");
        modalPopup.classList.remove("modal-error");
      }
    }
  });