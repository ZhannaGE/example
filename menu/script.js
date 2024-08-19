const elements = document.querySelectorAll('.menu__link');
  //полосаменю
  function clearActiveClasses() {
    elements.forEach(element => {
        element.classList.remove('active');
    });
}

// Добавляем обработчик клика на каждый элемент
elements.forEach(element => {
    element.addEventListener('click', function() {
        clearActiveClasses(); 
        this.classList.add('active'); 
    });
});