document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.services__tab');
    const readMoreBtn = document.querySelector('.services__read-more');
    const hiddenText = document.querySelector('.services__hidden-text');
    const menuButton = document.querySelector('.header__menu-button');
    const closeButton = document.querySelector('.menu__close-button');
    const menu = document.querySelector('.menu');

    // табы
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const activeTab = document.querySelector('.services__tab--active');
            if (activeTab) {
                activeTab.classList.remove('services__tab--active');
            }
            tab.classList.add('services__tab--active');
        });
    });

    // расскрытие текста

    if (readMoreBtn && hiddenText) {
        readMoreBtn.addEventListener('click', () => {
            if (hiddenText.classList.contains('services__hidden-text--visible')) {
                hiddenText.classList.remove('services__hidden-text--visible');
                hiddenText.classList.add('services__hidden-text--320');
                readMoreBtn.textContent = 'Читать далее';
            } else {
                hiddenText.classList.remove('services__hidden-text--320');
                hiddenText.classList.add('services__hidden-text--visible');
                readMoreBtn.textContent = 'Скрыть';
            }
        });
    }

    // меню

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('menu--open');
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('menu--open');
    });


});
