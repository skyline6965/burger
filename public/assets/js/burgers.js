$(function () {
    // function to change status of burger
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweaten");

        var newEatenStatus = {
            eaten: newEaten
        };

        // send PUT request 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenStatus
        }).then(
            function () {
                console.log("changed eaten to", newEaten);
                location.reload();
            }
        );
    });


    // function to add new burger
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#brgr").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };

        // send POST request 
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger called: " + newBurger);
                location.reload()
            }
        );
    });

    // function to dee-yeet burgers
    $(".delete-burger").on("click", function (event) {
        // grab which brgr to delete
        var id = $(this).data("id");

        // send delete request via ajax
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(    
            function () {
                console.log("dee-yeeted burger " + id);
                location.reload();
            }
        );
    });
});