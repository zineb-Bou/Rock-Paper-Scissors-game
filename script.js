const modal = document.querySelector('#open-modal');
const close_btn = document.querySelector('.close-btn');
const rule_btn = document.querySelector('.rule-btn');
const body = document.getElementsByTagName('body');
const filtter = document.querySelector('.filtter');
rule_btn.addEventListener('click', function () {
  modal.classList.add('open');
  filtter.classList.add('show-it');
});
close_btn.addEventListener('click', function () {
  modal.classList.remove('open');
  filtter.classList.remove('show-it');
});
