$(document).ready(function () {
  $('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });

  $(".thisYear").text( (new Date).getFullYear() );
});

window.onload = function () {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav");
  let body = document.querySelector("body");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active")
    nav.classList.toggle("open")
    body.classList.toggle("hidden")
  })

  const buttonUp = {
    el: document.querySelector('.arrow-btn-up'),
    show() {
      this.el.classList.add('btn-visible');
    },
    hide() {
      this.el.classList.remove('btn-visible');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 300 ? this.show() : this.hide();
      });
      document.querySelector('.arrow-btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }

  buttonUp.addEventListener();
}

AOS.init();