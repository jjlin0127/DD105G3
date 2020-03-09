$(document).ready(function() {
    $(".signup").css("display", "none");
    $('#signup').click(function() {
        let width = $(window).width();
        if (width < 768) {
            $(".whiteform").css("transform", "translateX(50%)");
        } else if (width >= 768) {
            $(".whiteform").css("transform", "translateX(80%)");
        }
        $(".signin").css("display", "none");
        $(".signup").css("display", "");
    });
    $('#signin').click(function() {
        $(".whiteform").css("transform", "translateX(0%)");
        $(".signup").css("display", "none");
        $(".signin").css("display", "");
    });
    $("#mobilelogintab").tabs();
});