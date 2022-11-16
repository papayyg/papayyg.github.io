const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const goto = anchor.hasAttribute("href")
            ? anchor.getAttribute("href")
            : "body";
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}

$(document).ready(function () {
    $("ul.food__tabs").on(
        "click",
        "li:not(.food__tab_active)",
        function () {
            $(this)
                .addClass("food__tab_active")
                .siblings()
                .removeClass("food__tab_active")
                .closest("div.container")
                .find("div.food__content")
                .removeClass("food__content_active")
                .eq($(this).index())
                .addClass("food__content_active");
        }
    );
});
