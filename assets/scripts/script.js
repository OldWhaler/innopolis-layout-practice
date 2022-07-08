const questionWrappers = document.querySelectorAll('.faq__question-wrapper');

questionWrappers.forEach(questionWrapper => questionWrapper.addEventListener('click', questionWrapperClickHandeler))

function questionWrapperClickHandeler() {
  console.log(this)
  this.querySelector('.faq__arrow-button').classList.toggle('faq__arrow-button_modified');
  this.querySelector('.faq__answer').classList.toggle('visually-hidden');
}

document.querySelector('.burger').addEventListener('click', burgerClickHandler)

function burgerClickHandler() {
  this.classList.toggle('rotate90')
}