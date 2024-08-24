

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.services__tab');
    const readMoreBtn = document.querySelector('.services__read-more');
    const hiddenText = document.querySelector('.services__hidden-text');
    const menuButton = document.querySelector('.header__menu-button');
    const closeButton = document.querySelector('.menu__close-button');
    const menu = document.querySelector('.menu');
    const elements = document.querySelectorAll('.menu__link');

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
        menu.classList.toggle('active');
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('menu--open');
        menu.classList.remove('active');
    });

    //полосаменю
    function clearActiveClasses() {
        elements.forEach(element => {
            element.classList.remove('active');
        });
    }

    elements.forEach(element => {
        element.addEventListener('click', function() {
            clearActiveClasses(); 
            this.classList.add('active'); 
        });
    });

});
