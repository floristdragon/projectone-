//第一种方法：Window Location Href(location.href 属性返回当前页面的 URL。)
$(document).ready(function() {
    $(".nav li a").each(function(i) {
        var x = window.location.href;
        var thisUrl = $(this).attr("href");
        //// $(this).removeClass("current");
        if (x.indexOf(thisUrl) > 0) {
            //$(this).addClass("current");//为a元素添加类current
            //console.log(i);
            $(".nav li").eq(i).addClass("current"); //为a元素的父级元素li添加类current
            //// $(this).css("background-color", "#f75151");
            //// console.log($(this));
        }

    });
    // $("#footer .friendlink li a").each(function(j) {
    //     var a = window.location.href;
    //     var thisUrl = $(this).attr("href");
    //     //// $(this).removeClass("current");
    //     if (a.indexOf(thisUrl) > 0) {
    //         $(this).addClass("active");
    //         //console.log($("#footer .friendlink li").eq(j));
    //         //// $(this).css("color", "#f75151");
    //     }
    // });

});