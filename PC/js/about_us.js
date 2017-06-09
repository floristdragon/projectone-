 $(function() {
     $(".sidebar ul li").click(function() {
         $(".sidebar ul li").removeClass("current");
         $(this).addClass("current");
         // $(this).css({"background-color":"#f56b7"},{"color":"#ffffff"});
         //var index = $(this).index();
         // console.log(index);
         // console.log($(".mid_right div").eq(index));
         //  $(".mid_right div").css("display", "none").eq(index).css("display", "block");
     });
 });