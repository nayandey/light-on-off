(function($){
    'use strict'
    
    $('.btn-success').on('click', function(){
        $('.off').hide();
        $('.on').show();
        $(this).hide();
        $('.btn-danger').show();
    });
    
    $('.btn-danger').on('click', function(){
        $('.off').show();
        $('.on').hide();
        $(this).hide();
        $('.btn-success').show();
    });
})(jQuery);

