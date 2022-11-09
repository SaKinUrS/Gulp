
import Swiper, { Navigation, Pagination } from 'swiper';

const CollectionSwiper = new Swiper('.collection-swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.collection-button-next',
        prevEl: '.collection-button-prev',
    },



    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,

        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,

        },
        991: {
            slidesPerView: 3,
            spaceBetween: 24,

        },

    }
});

const ArticleSwiper = new Swiper('.articles-swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.articles-button-next',
        prevEl: '.articles-button-prev',
    },



    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,

        },
        500: {
            slidesPerView: 2,
            spaceBetween: 15,

        },
        700: {
            slidesPerView: 3,
            spaceBetween: 24,

        },
    }
});
