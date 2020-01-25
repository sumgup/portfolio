var content = 'There are two kind of people, people who create business with there gut feeling and others who validate there assumptions and build the business, which one are you? ';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('#typedtext').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }
    ).animate({
        opacity: 1
    }, 100);      

}).promise().done(function(){ $(".landinglinks").show(1000)});


