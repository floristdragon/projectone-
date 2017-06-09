$(".img_nav").click(function() {
    //z-index:设置无效
    // $("article").css({ "display": "block" }, { "z-index": "2" });
    var scrHeight = document.body.scrollHeight;
    $(".hidden_list").addClass("changed").css("height", scrHeight);
    $(".hidden_list header img").click(function() {
        $(".hidden_list").removeClass("changed");
    });
});

//初始化Swiper
var mySwiper = new Swiper('.swiper-container', {
    //滑动方向
    direction: 'horizontal',
    //滑动速度
    speed: 3000,
    //是否自动播放
    autoplay: 1,
    //手动滑动时禁止自动播放
    // autoplayDisableOnInteraction: true,
    //循环滑动
    loop: true,
    pagination: '.swiper-pagination',
});

// (function() {
//     var temp = true;
//$(".img_nav").click(function() {
// if (temp) {
// $(".img_nav").attr("src", "images/close.png");
// $(this).css("background-image", "url(images/close_bg.png)")
//} else {
// $(".img_nav").attr("src", "images/smallnav.png");
//}
//temp = !temp;
//});
// })();