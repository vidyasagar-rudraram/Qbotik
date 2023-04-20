(function($) {
    "use strict";

    // Mean Menu
    $('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });

    // Header Sticky
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Header Sticky
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.blog_accordion').addClass("blog-sticky");
        } else {
            $('.blog_accordion').removeClass("blog-sticky");
        }
    });

    // Others Option For Responsive JS
    $(".others-option-for-responsive .dot-menu").on("click", function() {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });

    // Search Menu JS
    $(".others-option .search-icon i").on("click", function() {
        $(".search-overlay").toggleClass("search-overlay-active");
    });
    $(".search-overlay-close").on("click", function() {
        $(".search-overlay").removeClass("search-overlay-active");
    });
}(jQuery));