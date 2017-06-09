$(".menu li").click(function() {
    $(".menu li").removeClass("active");
    // $(this).children().addClass("active");
    $(this).addClass("active");
    // var i = $(this).index();
    // console.log($(this).children());
    // console.log(i);
    // $(".news_list").css("display", "none").eq(i).css("display", "block");
});