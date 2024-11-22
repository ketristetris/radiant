var second_Slide = $('.slide_2'),
    second_Slider = $('.services_slider_2'),
    second_countSlide = second_Slide.length,
    second_position = -359,
    second_shag = 566,
    second_max = (second_countSlide * 566) - 566 -207;


second_Slider.width(566 * (second_countSlide));

$('.arrow_next_2').click(function(){
  if (second_position == -second_max) {
    second_position = 207;
    second_Slider.css("left", second_position + "px");
  } else {
    second_position = second_position - second_shag;
    second_Slider.css("left", second_position + "px");
  }
});
$('.arrow_prev_2').click(function(){
  if (second_position == 207) {
    second_position = -second_max;
    second_Slider.css("left", second_position + "px");
  } else {
    second_position = second_position + second_shag;
    second_Slider.css("left", second_position + "px")
  }
});