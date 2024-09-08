
const btnView = document.getElementById('myBtn');
const viewContainer = document.querySelector('.brand__container');
const textBtnReview = btnView.querySelector('.services__read-more');



btnView.addEventListener('click', () => {
    textBtnReview.textContent = viewContainer.classList.contains('active') ? 'Читать далее' : 'Скрыть';
    viewContainer.classList.toggle('active');

const img = btnView.querySelector('.services__toggle-img');
img.classList.toggle('rotate');
})