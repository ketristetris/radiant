var third_Slide = $('.slide_3'),
    third_Slider = $('.services_slider_3'),
    third_countSlide = third_Slide.length,
    third_position = 0,
    third_shag = 566,
    third_max = (third_countSlide * 566) - 566;


third_Slider.width(566 * (third_countSlide));

$('.arrow_next_3').click(function(){
  if (third_position == -third_max) {
    third_position = 0;
    third_Slider.css("left", third_position + "px");
  } else {
    third_position = third_position - third_shag;
    third_Slider.css("left", third_position + "px");
  }
});
$('.arrow_prev_3').click(function(){
  if (third_position == 0) {
    third_position = -third_max;
    third_Slider.css("left", third_position + "px");
  } else {
    third_position = third_position + third_shag;
    third_Slider.css("left", third_position + "px")
  }
});