const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  function showAlert(text) {
    let alertEl = document.getElementsByClassName('alert-wrapper')[0];
    alertEl.children[0].children[0].innerHTML = text;
    alertEl.style.display = 'block';
    setTimeout(() => {
      alertEl.style.display = 'none';
    }, 3000);
  }
  
  
  let modal = document.getElementById('modal');
  let btn = document.getElementById('openModal');
  let close = document.getElementsByClassName('close')[0];
  
  btn.onclick = function() {
    modal.style.display = 'block';
  }
  
  close.onclick = function() {
    modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  
  let sendForm = document.getElementById('send-modal');
  
  sendForm.onclick = function() {
    let input = document.getElementById('phone');
  
    if (input.value.trim() == '') {
      input.classList.add('is-invalid');
      input.previousElementSibling.classList.add('is-invalid');
      showAlert("Enter your number phone");
    } else {
      input.classList.remove('is-invalid');
      input.previousElementSibling.classList.remove('is-invalid');
      showAlert("Successfully!");
      input.value = '';
    }
  }

let cart  = document.getElementById("cart");
let count = document.getElementsByClassName("badge")[0];
let total = document.getElementsByClassName("total")[0];

document.addEventListener('click', function(e) {

  let el = e.target;
  if (el.getAttribute('class') == 'add-to-cart') {
    if(!cart.classList.contains('active')) cart.classList.add('active');
    count.innerHTML = +count.innerHTML + 1;
    total.innerHTML = +total.innerHTML + (+el.getAttribute('attr-price'));
    showAlert("Product successfully added to cart", 1000);
  }
  
});

let subscribe = document.getElementById("subscribe");

subscribe.onclick = function(event) {
  event.preventDefault();

  let email = document.getElementById('email');

  if (email.value.trim() == '') {
    email.classList.add('is-invalid');
    showAlert("Enter your email address");
  } else {
    email.classList.remove('is-invalid');
    showAlert("Your subscribe is success");
    email.value = '';
  }
}