$(window).on('load', function() {
   $('.start-animation').each(function () {
       var that = $(this);
       setTimeout(function () {
           that.css({
               'animation-play-state': 'running'
           })
       }, 1500);
   })
});