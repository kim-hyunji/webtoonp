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

