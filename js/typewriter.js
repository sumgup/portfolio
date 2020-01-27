var content = 'There are two set of people, people who create business with there gut feeling and others who validate there assumptions and build the business. Which one are you?';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('#typedtext').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }
    ).animate({
        opacity: 1
    }, 100);      

}).promise().done(function(){
     $(".landinglinks").show(4000);
     $("#typedtext").hide(8000);
    });


