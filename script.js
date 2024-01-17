$('#bg_img').mousemove(function(e){
    $(this + ":after").css('background-position',''+e.pageX/10+'px '+e.pageY/10+'px');
});