$(document).ready(function () {

    $("#btnOpenFitnessCaseStudy").click(function () {
        $("#casestudylist").hide('slow');
        $(".curioustext").hide('slow');
        $("#fitnessCaseStudyDetail").show('slow');

        $(".modal-header").css("background-color", "black");
        $(".modal-title").css("color", "white");
        $(".close").css("color", "white");

        var bodyStyles = window.getComputedStyle(document.body);

        var modalBackgroundColor = bodyStyles.getPropertyValue('--modalbackgroundcolor'); //get
        $(".modal-content").css("background-color", modalBackgroundColor
        );
    });



    $("#backtocasestudylist").click(function () {
        $("#casestudylist").show('slow');
        $(".curioustext").show('slow');
        $("#fitnessCaseStudyDetail").hide('slow');

        $(".modal-header").css("background-color", "white");
        $(".modal-title").css("color", "black");
        $(".close").css("color", "black");

        var bodyStyles = window.getComputedStyle(document.body);

        var modalBackgroundColor = bodyStyles.getPropertyValue('--modalbackgroundcolor'); //get
        $(".modal-content").css("background-color", "white");
    });


});
