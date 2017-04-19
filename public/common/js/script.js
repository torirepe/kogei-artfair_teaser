$(window).load(function(){
  if($("#heroSlider")) {
    heroSlider()
  }
});

function heroSlider(){
  var target = $("#heroSlider");
  target.bxSlider({
    auto: true,
    speed: 600,
    pager: true,
    controls: true,
    infiniteLoop: true,
  });
}