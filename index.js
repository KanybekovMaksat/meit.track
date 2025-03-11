var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,      // Количество слайдов, видимых на экране
    spaceBetween: 10,      // Расстояние между слайдами
    navigation: {          // Настройка кнопок для переключения слайдов
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {          // Настройка пагинации
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {         // Настройки для разных экранов
        768: {
            slidesPerView: 2,   // Для экранов больше 768px показываем 2 слайда
        },
        1024: {
            slidesPerView: 3,   // Для экранов больше 1024px показываем 3 слайда
        }
    }
});
