const btn_menu_mobile = document.querySelector('.js_btn_menu_bar');
const menu_mobile = document.querySelector('.js_menu_mobile');
const header_container = document.querySelector('.header_container');
const body = document.querySelector('body');
const menu_mobile_container = document.querySelector('.js_container_menu_moblie');
btn_menu_mobile.onclick = function () {
  if (menu_mobile.classList.contains('active')) {
    menu_mobile.classList.remove('active');
    header_container.style.borderRadius = '40px';
    btn_menu_mobile.classList.replace('fa-xmark', 'fa-bars');
  }
  else {
    menu_mobile.classList.add('active');
    header_container.style.borderRadius = '40px 40px 0 0';
    btn_menu_mobile.classList.replace('fa-bars', 'fa-xmark');
  }
}
body.onclick = function () {
  if (menu_mobile.classList.contains('active')) {
    menu_mobile.classList.remove('active');
    header_container.style.borderRadius = '40px';
    btn_menu_mobile.classList.replace('fa-xmark', 'fa-bars');
  }
}
menu_mobile_container.addEventListener('click', (e) => {
  e.stopPropagation();
})