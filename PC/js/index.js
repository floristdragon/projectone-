$(function() {
    $(".news_left ul li").click(function() {
        $(".news_left ul li").removeClass("on");
        $(this).addClass("on");
        var x = $(this).index();
        console.log(x);
        $(".news_right").css("display", "none").eq(x).css("display", "block");
        // $(".news_right .news_list li:first-of-type>h3>a").addClass("current");
        // $(".news_right .news_list li:first-of-type>.more>a").addClass("active");
    });
});