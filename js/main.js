"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeBtnModal = document.querySelector(".modal__close");
  const viewModal = document.querySelector(".login__btn");


  viewModal.addEventListener('click', openModal);
  closeBtnModal.addEventListener('click', closeModal);

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
  }
});
