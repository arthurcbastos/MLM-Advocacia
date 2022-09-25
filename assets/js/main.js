(function ($) {
    "use strict";
    jQuery(window).on("load", function () {
        $(".egns-preloader").delay(1600).fadeOut("slow");
    });
    $("select").niceSelect();
    jQuery(window).on("load", function () {
        new WOW().init();
        window.wow = new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: true, live: true, offset: 100 });
        window.wow.init();
    });
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header.style-1, header.style-2, header.style-3,header.style-4,header.style-5");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    $(".search-btn").on("click", function () {
        $(".mobile-search").addClass("slide");
    });
    $(".search-cross-btn").on("click", function () {
        $(".mobile-search").removeClass("slide");
    });
    $(".mobile-menu-btn").on("click", function () {
        $(".main-nav").addClass("show-menu");
    });
    $(".menu-close-btn").on("click", function () {
        $(".main-nav").removeClass("show-menu");
    });
    $(".main-nav .bi").on("click", function (event) {
        var $fl = $(this);
        $(this).parent().siblings().find(".sub-menu").slideUp();
        $(this).parent().siblings().find(".bi").addClass("bi-chevron-down");
        if ($fl.hasClass("bi-chevron-down")) {
            $fl.removeClass("bi-chevron-down").addClass("bi-chevron-up");
        } else {
            $fl.removeClass("bi-chevron-up").addClass("bi-chevron-down");
        }
        $fl.next(".sub-menu").slideToggle();
    });
    var toggleIcon = document.querySelectorAll(".sidebar-btn");
    var closeIcon = document.querySelectorAll(".cross-icon");
    var searchWrap = document.querySelectorAll(".menu-toggle-btn-full-shape");
    toggleIcon.forEach((element) => {
        element.addEventListener("click", () => {
            document.querySelectorAll(".menu-toggle-btn-full-shape").forEach((el) => {
                el.classList.add("show-sidebar");
            });
        });
    });
    closeIcon.forEach((element) => {
        element.addEventListener("click", () => {
            document.querySelectorAll(".menu-toggle-btn-full-shape").forEach((el) => {
                el.classList.remove("show-sidebar");
            });
        });
    });
    window.onclick = function (event) {
        searchWrap.forEach((el) => {
            if (event.target === el) {
                el.classList.remove("show-sidebar");
            }
        });
    };
    var swiper = new Swiper(".mySwiper", { spaceBetween: 10, slidesPerView: 4, freeMode: true, autoplay: true, watchSlidesProgress: true });
    var swiper2 = new Swiper(".mySwiper2", { spaceBetween: 10, autoplay: true, effect: "fade", navigation: { nextEl: ".banner2-next", prevEl: ".banner2-prev" }, thumbs: { swiper: swiper } });
    var swiper = new Swiper(".banner3-slider", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 15,
        effect: "fade",
        fadeEffect: { crossFade: true },
        autoplay: true,
        loop: true,
        roundLengths: true,
        pagination: { el: ".swiper-pagination", clickable: "true" },
        navigation: { nextEl: ".banner3-prev", prevEl: ".banner3-next" },
    });
    var swiper = new Swiper(".attorney-slider", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 15,
        loop: true,
        roundLengths: true,
        pagination: { el: ".swiper-pagination", clickable: "true" },
        navigation: { nextEl: ".service-prev1", prevEl: ".service-next1" },
        breakpoints: { 280: { slidesPerView: 1, navigation: false }, 576: { slidesPerView: 2, navigation: false }, 768: { slidesPerView: 2, navigation: false }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },
    });
    var slickopts = {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: 1000,
        spaceBetween: 20,
        rows: 2,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 776, settings: { slidesToShow: 2, rows: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1, rows: 2 } },
        ],
    };
    $(".slick-wrapper").slick(slickopts);
    var swiper = new Swiper(".blog-slider1", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 15,
        loop: true,
        roundLengths: true,
        pagination: { el: ".swiper-pagination", clickable: "true" },
        navigation: { nextEl: ".service-prev1", prevEl: ".service-next1" },
        breakpoints: { 280: { slidesPerView: 1, navigation: false }, 576: { slidesPerView: 2, navigation: false }, 768: { slidesPerView: 2, navigation: false }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 3 } },
    });
    var swiper = new Swiper(".blog-slider2", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 15,
        loop: true,
        roundLengths: true,
        pagination: { el: ".swiper-pagination", clickable: "true" },
        navigation: { nextEl: ".blog2-next", prevEl: ".blog2-prev" },
        breakpoints: { 280: { slidesPerView: 1, navigation: false }, 576: { slidesPerView: 1, navigation: false }, 768: { slidesPerView: 2, navigation: false }, 992: { slidesPerView: 2 }, 1200: { slidesPerView: 2 } },
    });
    var swiper = new Swiper(".practice3-slider", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 25,
        autoplay: true,
        loop: true,
        roundLengths: true,
        pagination: { el: ".swiper-pagination", clickable: "true" },
        navigation: { nextEl: ".service-prev1", prevEl: ".service-next1" },
        breakpoints: { 280: { slidesPerView: 1, navigation: false }, 576: { slidesPerView: 2, navigation: false }, 768: { slidesPerView: 2, navigation: false }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 3 } },
    });
    new Swiper(".testi1-slider", {
        slidesPerView: 1,
        speed: 1200,
        autoplay: true,
        spaceBetween: 25,
        loop: true,
        roundLengths: true,
        navigation: { nextEl: ".testi-prev1", prevEl: ".testi-next1" },
        pagination: { el: ".swiper-pagination", type: "fraction" },
        breakpoints: { 280: { slidesPerView: 1 }, 480: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 992: { slidesPerView: 2 }, 1200: { slidesPerView: 2 } },
    });
    new Swiper(".testi3-slider", {
        slidesPerView: 1,
        speed: 1200,
        autoplay: true,
        effect: "fade",
        crossFade: "true",
        spaceBetween: 25,
        autoplay: "true",
        loop: true,
        roundLengths: true,
        navigation: { nextEl: ".testi3-prev", prevEl: ".testi3-next" },
        pagination: { el: ".swiper-pagination", type: "fraction" },
        breakpoints: { 280: { slidesPerView: 1 }, 480: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 992: { slidesPerView: 1 }, 1200: { slidesPerView: 1 } },
    });
    var swiper = new Swiper(".casestudy2-slider", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 2,
        autoplay: true,
        loop: true,
        roundLengths: true,
        pagination: { el: ".swiper-pagination", clickable: "true" },
        navigation: { nextEl: ".case2-prev", prevEl: ".case2-next" },
        breakpoints: { 280: { slidesPerView: 1, navigation: false }, 576: { slidesPerView: 1, navigation: false }, 768: { slidesPerView: 2, navigation: false }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },
    });
    var swiper = new Swiper(".comnt-slider", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 15,
        autoplay: true,
        loop: true,
        roundLengths: true,
        parallax: true,
        pagination: false,
        navigation: { nextEl: ".comment-prev", prevEl: ".comment-next" },
    });
    const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    if (togglePassword) {
        togglePassword.addEventListener("click", function (e) {
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            this.classList.toggle("bi-eye");
        });
    }
    var $grid = $(".grid").isotope({});
    $(".filter-button-group").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
    });
    $(".intro-wrap").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    $(".coundown").each(function () {
        $(this).isInViewport(function (status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll(".odometer")[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    $(".popup-youtube").magnificPopup({ type: "iframe" });
    setTimeout(() => {
        var progress4 = 0.7;
        var progress3 = 0.5;
        var progress2 = 0.1;
        var progress = 0.1;
        $("#progress")
            .find("#blue")
            .animate({ "stroke-dashoffset": 198 * progress }, 2000);
        $("#progress1")
            .find("#blue1")
            .animate({ "stroke-dashoffset": 198 * progress }, 2000);
        $("#progress2")
            .find("#blue2")
            .animate({ "stroke-dashoffset": 198 * progress2 }, 2000);
        $("#progress3")
            .find("#blue3")
            .animate({ "stroke-dashoffset": 198 * progress3 }, 2000);
        $("#progress4")
            .find("#blue4")
            .animate({ "stroke-dashoffset": 198 * progress4 }, 2000);
    }, 1600);
})(jQuery);
