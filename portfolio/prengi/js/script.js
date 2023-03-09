window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".promo__list"),
          hamburger = document.querySelector(".promo__hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("promo__hamburger_active");
        menu.classList.toggle("promo__list_active");
    });

    let u = 1,
        d = document.querySelectorAll(".solutions__content"),
        a = document.querySelector(".solutions__prev"),
        m = document.querySelector(".solutions__next"),
        y = document.querySelector(".solutions__tabs"),
        f = document.querySelectorAll(".solutions__tab");
    function p(e) {
        e > d.length && (u = 1),
            e < 1 && (u = d.length),
            d.forEach((e) => (e.style.display = "none")),
            f.forEach((e) => e.classList.remove("solutions__tab_active")),
            (d[u - 1].style.display = "block"),
            f[u - 1].classList.add("solutions__tab_active");
    }
    function v(e) {
        p((u += e));
    }
    p(u),
        a.addEventListener("click", function () {
            v(-1);
        }),
        m.addEventListener("click", function () {
            v(1);
        }),
        y.addEventListener("click", function (e) {
            for (let t = 0; t < f.length + 1; t++)
                e.target.classList.contains("solutions__tab") &&
                    e.target == f[t - 1] &&
                    p((u = t));
        });
});


$(document).ready(function () {
    let $slider = $(".promo__inner").slick({
        dots: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="icons/dots_left.svg" alt="Left" style="width: 6px; height: 11px"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="icons/dots_right.svg" alt="Right" style="width: 6px; height: 11px"></button>',

    });

    let bg = document.querySelector(".promo");

    var backs = ["0", "1", "2", "3", "4"];
    $slider.on("afterChange", function (event, slick, index) {
        $(bg).css(
            "background-image",
            "url(img/promo/bg-" + backs[index] + ".jpg)",
        );
    });

   /*  $("ul.solutions__tabs").on(
        "click",
        "li:not(.solutions__tab_active)",
        function () {
            $(this)
                .addClass("solutions__tab_active")
                .siblings()
                .removeClass("solutions__tab_active")
                .closest("div.container")
                .find("div.solutions__content")
                .removeClass("solutions__content_active")
                .eq($(this).index())
                .addClass("solutions__content_active")
        }
    ); */
});
