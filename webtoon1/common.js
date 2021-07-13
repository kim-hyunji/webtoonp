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

// $(document).ready(function(){ 
//     $('.bxslider').bxSlider(); 
// });

$(document).ready(function(){ $('.bxslider').bxSlider({ 
    auto: false, 
    pause: 4000, 
    mode:'horizontal', 
    pager: true,
    pagerType: 'short',
    infiniteLoop: false,
    captions: true,
    hideControlOnEnd: true,
    controls: true,
    nextText: '>', 
    prevText: '<',
    onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
        var gosteps = currentSlideHtmlObject+1; //get current slide index you can add class this is working in mobile touch also
        $(".steps-count span").text(gosteps);
        // console.log(currentSlideHtmlObject+1); },
        console.log(gosteps);

            if (gosteps == 11) {
                    $('.bx-next').stop().click(function(){
                        // alert('마지막 페이지입니다. 다음 화로 넘어가시겠습니까?');
                        // window.location = '../main.html';
                        if (window.confirm('마지막 페이지입니다'))
                        { window.location = '../main.html'}
                        else
                        {return false}
                    });
            }    
   
        },
    }); 
});


// slider = $('.bxslider').bxSlider();
// var current = slider.getCurrentSlide();

// console.log(MainSlider.getCurrentSlide());

// if (getCurrentSlide = 11){
//  $().
// }



