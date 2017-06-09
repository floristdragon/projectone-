 $(function() {
     $(".sidebar ul li").click(function() {
         $(".sidebar ul li").removeClass("active");
         $(this).addClass("active");
         var i = $(this).index();
         $(".pro_list").css("display", "none").eq(i).css("display", "block");
     })
 })