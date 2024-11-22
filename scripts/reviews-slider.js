var reviewsSlide = $('.reviews-slide'),   // Подключение
    reviewsSlider = $('.reviews-wrapper'),//классов через переменные
    countSlide = reviewsSlide.length, // кол-во слайдов
    position = 0, // изначальная позиция
    shag = 386, // щаг слайдера
    max = (countSlide * 386) - 1158; // мах сдвиг слайдера
reviewsSlider.width(386 * (countSlide)); //задаём фулл ширину слайдера

$('.reviews-next').click(function(){
  if (position == -max) { //проверка максимально "сдвига" слайдера вправо т.е. назад
    position = 0; //откат к нулю
    reviewsSlider.css("left", position + "px");
  } else { //обычный сдвиг влево т.е. вперёд
    position = position - shag;
    reviewsSlider.css("left", position + "px");
    console.log(position);
  }
});
$('.reviews-prev').click(function(){
  if (position == 0) { //проверка максимально "сдвига" слайдера влево т.е. вперёд
    position = -max; //откат к максимуму
    reviewsSlider.css("left", position + "px");
  } else {//обычный сдвиг вправо т.е. назад
    position = position + shag;
    reviewsSlider.css("left", position + "px")
  }
});