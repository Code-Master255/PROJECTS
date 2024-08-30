$(document).ready(function(){
    $('#Search').click(function(){
        $('.input').toggle();
    });
    $(window).on('scroll',function(){
      if($(this).scrollTop() > 300){
        $('#header').css('background','white');
      }else{
        $('#header').css('background','none');
      }
    });


    var $btn = $('.tab-manu');
    var $item = $('.tab-item');

    $btn.each(function(){
      $btn.on('click','button',function(){
        var selector = $(this).attr('data-filter');
        $item.isotope({filter:selector});
      });
    });

});