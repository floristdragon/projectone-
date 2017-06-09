$(document).ready(function() {
    $(".main .detail .detail_title a").each(function(i) {
        var a = window.location.href;
        var thisUrl = $(this).attr("href");
        console.log(a);
        // $(this).removeClass("first");
        if (a.indexOf(thisUrl) > 0) {
            // $(this).addClass("friendlink_a");
            $(".sidebar ul li a").eq(0).addClass("active");
            $(".nav li a").eq(3).css("background-color", "#f75151");
            //$(".friendlink ul li a").eq(3).css("color", "#f75151");
        }
    });
})