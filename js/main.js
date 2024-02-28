"use strict";

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

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
