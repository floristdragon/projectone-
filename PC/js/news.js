$(function() {
    $(".sidebar ul li").click(function() {
        $(".sidebar ul li").removeClass("active");
        $(this).addClass("active");
        var j = $(this).index();
        $(".news_list ul").css("display", "none").eq(j).css("display", "block");
    });
});