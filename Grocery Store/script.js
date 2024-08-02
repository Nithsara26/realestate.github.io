let searchForm =document.querySelector('.search-form');
let shoppingCart =document.querySelector('.shopping-cart');
let loinForm = document.querySelector('.login-form');
let navbar =document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loinForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loinForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector("#login-btn").onclick = ()=>{
    loinForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}
document.querySelector("#menu-btn").onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loinForm.classList.remove('active');
}
window.onscroll = ()=>{ 
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loinForm.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,

    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });

  /* review slide*/
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,

    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });