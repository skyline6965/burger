$(function(){
    // function to change status of burger
    $(".change-devoured").on("click",function(event){
        var id = $(this).data("id");
        var newEaten = $(this).data("new-eaten");

        var newEatenStatus = {
            eaten: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenStatus
        }).then(
            function(){
                location.reload();
            }
        );  
    });
    
})