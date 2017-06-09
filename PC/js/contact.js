var num = 0;
var arr = ["images/verifycode_1.jpg", "images/verifycode_2.jpg", "images/verifycode_3.jpg"]
$("#msg a").click(function() {
    num = num + 1;
    // alert(num);
    if (num <= arr.length - 1) {
        // alert(arr[num]);
        $("#msg .image img").attr("src", arr[num]);
    } else {
        num = 0;
        // alert(arr[num]);
        //num++;
        $("#msg .image img").attr("src", arr[num]);

    }
});