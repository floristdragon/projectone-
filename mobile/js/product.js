$("#content .product .menu li").click(function() {
    $("#content .product .menu li").removeClass("current");
    $(this).addClass("current");
    // $(this).children().addClass("current");
    // var i = $(this).index();
    // $(".product_show").css("display", "none").eq(i).css("display", "block");
});