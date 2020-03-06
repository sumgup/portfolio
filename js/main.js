$(document).ready(function () {


    $("#btn2").click(function () {
       
        let duration = 1500;
        $("#casestudylist").hide(0);
        $("#sketchNoteCaseStudyDetail").show(duration);
        var bodyStyles = window.getComputedStyle(document.body);
    });


    $("#btnOpenFitnessCaseStudy").click(function () {
        let duration = 1500;
        $("#casestudylist").hide(0);
        $("#fitnessCaseStudyDetail").show(duration);
        var bodyStyles = window.getComputedStyle(document.body);
    });


    $("#backtocasestudylist").click(function () {
        let duration = 500;
        $("#casestudylist").show(duration);
       $("#fitnessCaseStudyDetail").hide(0);
    });

    $("#btn3").click(function () {
        let duration = 500;
        $("#casestudylist").show(duration);
       $("#sketchNoteCaseStudyDetail").hide(0);
    });
    

  // Hide the menu
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

});



function topFunction() {
    $('#casestudies').animate({ scrollTop: 0 }, 'slow');
}