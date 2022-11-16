window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".promo__menu"),
        menuItem = document.querySelectorAll(".promo__menu-item"),
        hamburger = document.querySelector(".promo__hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("promo__hamburger_active");
        menu.classList.toggle("promo__menu_active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("promo__hamburger_active");
            menu.classList.toggle("promo__menu_active");
        });
    });
});

$(document).ready(function () {
    $(".reviews__inner").slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="icons/left-solid.png" alt="Left"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="icons/right-solid.png" alt="Right"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".promo__hamb").addClass("promo__hamb_fixed");
            $(".promo__hamburger").addClass("promo__hamburger_fixed");
        } else {
            $(".promo__hamb").removeClass("promo__hamb_fixed");
            $(".promo__hamburger").removeClass("promo__hamburger_fixed");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $(".pageup").fadeIn("slow");
        } else {
            $(".pageup").fadeOut("slow");
        }
    });
});
