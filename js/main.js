$(document).ready(function () {

    $("#btnOpenFitnessCaseStudy").click(function () {

        let duration = 1500;
        $("#casestudylist").hide(0);
        $(".curioustext").hide(0);
        $("#fitnessCaseStudyDetail").show(duration);
        var bodyStyles = window.getComputedStyle(document.body);
    });



    $("#backtocasestudylist").click(function () {
        let duration = 500;
        $("#casestudylist").show(duration);
        $(".curioustext").show(0);
       $("#fitnessCaseStudyDetail").hide(0);
    });

  // Hide the menu
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

});



function topFunction() {
    $('#casestudies').animate({ scrollTop: 0 }, 'slow');
}