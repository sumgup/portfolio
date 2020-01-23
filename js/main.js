$(document).ready(function () {

    $("#btnOpenFitnessCaseStudy").click(function () {



        $("#fitnesscasestudylistitem").hide(3000);
        $("#fitnessCaseStudyDetail").show('slow');
        var bodyStyles = window.getComputedStyle(document.body);

        var modalBackgroundColor = bodyStyles.getPropertyValue('--modalbackgroundcolor'); //get
        console.log(modalBackgroundColor);
        $(".modal-body").css("background-color", modalBackgroundColor
        );
    });


});
