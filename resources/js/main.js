/* mobile menu */
$('.mobile-btn').on('click', function () {
    $('.mobile-menu').toggleClass('active');
});

//more
$(document).ready(function () {
    $("#more-btn").click(function () {
        $(".more-content").slideToggle();
    });

});

//search
$(document).ready(function () {
    $("#search-btn").click(function () {
        $(".search-over").toggleClass("add-css");
    });
    $("#search-cross").click(function () {
        $(".search-over").toggleClass("add-css");
    });
});