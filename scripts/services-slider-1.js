var first_Slide = $('.slide_1'),
    fisrt_Slider = $('.services_slider_1'),
    first_countSlide = first_Slide.length,
    first_position = 0,
    first_shag = 566,
    first_max = (first_countSlide * 566) - 566;


fisrt_Slider.width(566 * (first_countSlide));

$('.arrow_next_1').click(function(){
  if (first_position == -first_max) {
    first_position = 0;
    fisrt_Slider.css("left", first_position + "px");
  } else {
    first_position = first_position - first_shag;
    fisrt_Slider.css("left", first_position + "px");
  }
});
$('.arrow_prev_1').click(function(){
  if (first_position == 0) {
    first_position = -first_max;
    fisrt_Slider.css("left", first_position + "px");
  } else {
    first_position = first_position + first_shag;
    fisrt_Slider.css("left", first_position + "px")
  }
});

//$(".img").css("opacity","0.5"); - задать полупрозрачность элементу с классом img
//
