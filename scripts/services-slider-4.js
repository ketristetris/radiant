var fourth_Slide = $('.slide_4'),
    fourth_Slider = $('.services_slider_4'),
    fourth_countSlide = fourth_Slide.length,
    fourth_position = -359,
    fourth_shag = 566,
    fourth_max = (fourth_countSlide * 566) - 566 -207;
    

fourth_Slider.width(566 * (fourth_countSlide));
$('.arrow_next_4').click(function(){
  if (fourth_position == -fourth_max) {
    fourth_position = 207;
    fourth_Slider.css("left", fourth_position + "px");
  } else {
    fourth_position = fourth_position - fourth_shag;
    fourth_Slider.css("left", fourth_position + "px");
  }
});
$('.arrow_prev_4').click(function(){
  if (fourth_position == 207) {
    fourth_position = -fourth_max;
    fourth_Slider.css("left", fourth_position + "px");
  } else {
    fourth_position = fourth_position + fourth_shag;
    fourth_Slider.css("left", fourth_position + "px")
  }
});