$(document).ready(function() {
    $(".results").hide();
    $("#return-home").hide();
    $("input[name='participants']").TouchSpin({
        min: 1,
        max: 200,
        step: 1,
        decimals: 0,
        boostat: 10,
        maxboostedstep: 10
    });

    $("input[name='set-time-hrs']").TouchSpin({
        min: 0,
        max: 48,
        step: 1,
        decimals: 0,
        boostat: 10,
        maxboostedstep: 10,
        postfix: 'hrs'
    });

    $("input[name='set-time-min']").TouchSpin({
        min: 0,
        max: 59,
        step: 5,
        decimals: 0,
        boostat: 10,
        maxboostedstep: 10,
        postfix: 'min'
    });

    $("form").submit(function(e) {
        e.preventDefault();

         // variables storing inputs
        var project_title = $("input[name=project-title]").val();
        var project_category = $("select option:selected").map(function () { return $(this).text(); }).get().join(', ');
        var project_overview = $("#overview").val();
        var num_people = $("#participants").val();
        var time_hrs = $("#set-time-hrs").val();
        var time_min = $("#set-time-min").val();

        // check if fields are empty, returns error message if at least one field is empty
        var empty = $(this).parent().find("input").filter(function() {
            return this.value === "";
        });
        if (empty.length) {
            alert("Please fill in all fields.");
        } else {
            // hide form, display project info
            $(".project-form").hide();
            $(".results").show();
            $("h4").html(project_title);
            $("#project_category").append(project_category);
            $("#project_overview").append("Project Overview: <br>" + project_overview);

            // checks to list the correct measurement
            if(num_people == 1) {
                $("#num_people").append(num_people + " person needed");
            } else if(num_people > 1){
                $("#num_people").append(num_people + " people needed");
            }

            if(time_hrs == 1) {
                $("#time_hrs").append(time_hrs + " hr ");
            } else if (time_hrs > 1) {
                $("#time_hrs").append(time_hrs + " hrs ");
            }

            if(time_min >= 5) {
                $("#time_min").append(time_min + " min");
            }
        }

        $("#edit-project").click(function() {
            $(".results").hide();
            $("#project_category").empty();
            $("#project_overview").empty();
            $("#num_people").empty();
            $("#time_hrs").empty();
            $("#time_min").empty();
            $(".project-form").show();
        });

        $("#submit-project").click(function() {
            $("#time_hrs").hide();
            $("#time_min").hide();
            $(".btn-row").hide();
            $("#notifier").empty();
            $("#notifier").append(" until end");
            $("#return-home").show();
        });

        $('#return-home').click(function() {
            window.location = "1.html";
        });
    });
});