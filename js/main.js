$(document).ready(function () {

    $("#btnOpenFitnessCaseStudy").click(function () {

        let duration = 1500;

        $("#casestudylist").hide(0);
        $(".curioustext").hide(0);
        
        $("#fitnessCaseStudyDetail").show(duration);

        $(".modal-header").css("background-color", "black");
        $(".modal-title").css("color", "white");
        $(".close").css("color", "white");


        var bodyStyles = window.getComputedStyle(document.body);

   
   
         $(".modal-content").css("background-color", "black");
    });



    $("#backtocasestudylist").click(function () {
        let duration = 500;


        $("#casestudylist").show(duration);
        $(".curioustext").show(0);

        $("#fitnessCaseStudyDetail").hide(0);

        $(".modal-header").css("background-color", "white");
        $(".modal-title").css("color", "black");
        $(".close").css("color", "black");

        var bodyStyles = window.getComputedStyle(document.body);

        $(".modal-content").css("background-color", "white");
    });


});
