$("#content .introduction .menu li").click(function() {
    $("#content .introduction .menu li").removeClass("active");
    // $(this).children().addClass("active");
    $(this).addClass("active");
    // var i = $(this).index();
    // $(".main").css("display", "none");
    // $(".main").eq(i).css("display", "block");
    // $(".main").css("display", "none").eq(i).css("display", "block");
});