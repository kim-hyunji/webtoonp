$(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
    
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
    
       if (st > lastScrollTop){
           // downscroll code
           $(".home_header").css('visibility','hidden').hover ()
       } else {
          // upscroll code
          $(".home_header").css('visibility','visible');
       }
       lastScrollTop = st;
    });
    });



    $(function(){
        $(".button").click(function(){
         $(".profile_text1").css({'transform':'translateX(-1000px)','transition':'.5s'})
         $(".profile_text2").css({'left':'50%','transform':'translateX(-50%)','transition':'.5s'})
         $(".button").css('opacity','30%');
         $(".button2").css('opacity','100%');
     });
 
         $(".button2").click(function(){
             $(".profile_text1").css({'transform':'translateX(0)','transform':'translateY(-50%)', 'transition':'.5s'})
             $(".profile_text2").css({'left':'900px', 'transition':'.5s'})
             $(".button").css('opacity','100%');
             $(".button2").css('opacity','30%');
         });
     });




     $(window).scroll(function () {

		

        var height = $(document).scrollTop();
    
        console.log(height);
    
        
        if (height > 1750){
            $('.skill1_box').slideDown();
            $('.skill2_box').slideDown();
            $('.skill3_box').slideDown();
        } 
        else if (height < 1700){
            $('.skill1_box').slideUp();
            $('.skill2_box').slideUp();
            $('.skill3_box').slideUp();
        }  
    });

