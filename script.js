//для того, чтобы убедиться, что DOM загружен перед запуском скрипта.
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.services__tab');
    const readMoreBtn = document.querySelector('.services__read-more');
    const hiddenText = document.querySelector('.hidden-text');


    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.services__tab.active').classList.remove('active');
            tab.classList.add('active');
        });
    });

    readMoreBtn.addEventListener('click', () => {
        if (hiddenText.classList.contains('visible')) {
            hiddenText.classList.remove('visible');
            hiddenText.classList.add('hidden320');
            readMoreBtn.textContent = 'Читать далее';
        } else {
            hiddenText.classList.remove('hidden320');
            hiddenText.classList.add('visible');
            readMoreBtn.textContent = 'Скрыть';
        }
    });


});
