const $header = document.querySelector('header');
const $toggle = document.getElementById('toggle');
const $navigation = document.getElementById('navigation');

window.addEventListener('scroll', () => {
    $header.classList.toggle('sticky', window.scrollY > 0)
})

$toggle.addEventListener('click', () => {
    $toggle.classList.toggle('active');
    $navigation.classList.toggle('active');
})

$navigation.addEventListener('click', ()=>{
    $toggle.classList.remove('active');
    $navigation.classList.remove('active');
})