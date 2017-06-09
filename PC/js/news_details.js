$(document).ready(function() {
    $(".mid_bot .main h1 a").each(function(i) {
        var a = window.location.href;
        var thisUrl = $(this).attr("href");
        // console.log(thisUrl);
        // $(this).removeClass("first");
        if (a.indexOf(thisUrl) > 0) {
            // $(this).addClass("friendlink_a");
            $(".mid_bot .sidebar li a").eq(0).addClass("active");
            $(".nav li a").eq(2).css("background-color", "#f75151");
            //$(".friendlink ul li a").eq(2).css("color", "#f75151");
        }
    });
})