$(function() {
    var i = 0; // 存储图片标识
    //左箭头切换上一张
    $(".banner_lbtn").click(function() {
        i = (i - 1) % $(".banner_imgs li").length;
        // $(".banner_imgs li").fadeOut(600);
        // $(".banner_imgs li").eq(i).fadeIn(600);
        $(".banner_imgs li").eq(i).fadeIn(600).siblings().fadeOut(600);
    });
    //右箭头切换下一张
    $(".banner_rbtn").click(function() {
        i = (i + 1) % $(".banner_imgs li").length;
        // $(".banner_imgs li").fadeOut(600);
        // $(".banner_imgs li").eq(i).fadeIn(600);
        $(".banner_imgs li").eq(i).fadeIn(600).siblings().fadeOut(600);
    });
    //自动轮播
    //每隔3秒调用action函数
    var time = setInterval(action, 2000);
    // var time = setInterval(function() { action() }, 3000);

    function action() {
        i = (i + 1) % $(".banner_imgs li").length;
        // $(".banner_imgs li").fadeOut(600);
        // $(".banner_imgs li").eq(i).fadeIn(600);
        $(".banner_imgs li").eq(i).fadeIn(600).siblings().fadeOut(600);
        // i++;
        console.log(i);
    };
    //用户的鼠标指针移动到banner图上，则图片停止。移开则图片继续自动轮播
    $(".banner_imgs li").each(function() {
        $(".banner_imgs li,.banner_lbtn,.banner_rbtn").mouseover(function() {
            clearInterval(time);
        });
        $(this).mouseout(function() {
            time = setInterval(action, 3000);
        });
    });
});