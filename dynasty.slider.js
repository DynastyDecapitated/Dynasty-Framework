/**
 * Dynasty Slider
 * Author: Luqman Yasin
 * Author URL: https://luqman.online
 * Date : 28/06/2016
 **/

var timer;
$(document).ready(function(){
  timer = setInterval(function(){
    var active      = $(".activeSlide");
    var activeOrder = $(active).attr("data");
    var count       = $(".sliders > .sliderImage").length;
    $(active).removeClass("activeSlide");
    $(".ellipse.active").removeClass("active");
    $(".images img.active").removeClass("active");
    if(activeOrder == count) {
      activeOrder = 1;
    } else {
      activeOrder++;
    }
    $(".sliderImage").each(function(){
      if($(this).attr("data") == activeOrder) {
        $(this).addClass("activeSlide");
      }
    });
    $(".images img").each(function(){
      if($(this).attr("data") == activeOrder) {
        $(this).addClass("active");
      }
    });
    $(".ellipse").each(function(){
      if($(this).attr("data") == activeOrder) {
        $(this).addClass("active");
      }
    });
  }, 5000);

  $(".images img").click(function(){
    var order       = $(this).attr("data");
    $(".images img.active").removeClass("active");
    $(this).addClass("active");
    $(".sliderImage").each(function(){
      if($(this).attr("data") == order) {
        $(".activeSlide").removeClass("activeSlide");
        $(this).addClass("activeSlide");
      }
    });
    $(".ellipse").each(function(){
      if($(this).attr("data") == order) {
        $(".ellipse.active").removeClass("active");
        $(this).addClass("active");
      }
    });
  });

});
