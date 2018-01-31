$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function(){
  console.log('document ready');
  
  $('.button').on('click',function(event){
    event.preventDefault();
    var shape= $(this).data('shape');
    console.log('clicked shape',shape);
    
    var fromShapes = ['square','rabbet','triangle','pentagon','star'];
    
    for(var i=0,shape;(fromShape=fromShapes[i]);i++){
      if(fromShape !== shape && shape !== 'circle' && $('.shape').hasClass(fromShape)){
        var animationClass = fromShape+'-to-'+shape;
        $('.shape').animateCss(animationClass);
        break;
      }  
    }
     
    
    $('.shape').removeClass('square circle triangle pentagon rabbet star').addClass(shape);
  });
});