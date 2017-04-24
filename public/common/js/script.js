$(function(){
  //extensionBox
  $(document).on('click','#extensionBox a', function(){
    var ah = $('#extensionBox a').innerHeight();
    var ph = $('#extensionBox p').innerHeight();
    $('#extensionBox').height(ah + ph);
    $('#extensionBox').toggleClass('active');
  });
  
  //href #
  $(document).on('click', 'a[href^=#]', function () {
    var speed = 360;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
  
  $('#language').click(function(){
    var next;
    var body = $('body');
    var wrapper = $('#wrapper');
    if(body.hasClass('jp')) {
      next = 'en';
    } else if(body.hasClass('en')) {
      next = 'jp';
    }
    $.ajax(next + '.html', {
      timeout : 1000,
      datatype:'html'
    }).then(function(data){
      var outHtml = $($.parseHTML(data));
      var shapeHtml = $(outHtml.filter('#' + next)[0].innerHTML);
      wrapper.animate({
        opacity: 0
      }, 360, 'swing', function() {
        body.removeClass();
        body.addClass(next);
        $('#wrapper').empty().append(shapeHtml);
        shapeHtml.ready(function() {
          wrapper.animate({ opacity: 1 }, 600, 'swing');
        });
      });
    },function(jqXHR, textStatus) {
      alert(textStatus);
    })
  });
});
