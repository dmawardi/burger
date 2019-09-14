// Document ready
$(document).ready(function(){

    // Event handler for submit button (Create burger)
    $('button#submitBurger').on('click', function(event){
        // Prevent default behavior
        event.preventDefault();
        // Assign burger input to burgerInput
        let burgerInput = $('#burgerInput');
        // Extract burger name
        let newBurgerName = burgerInput.val();
        // Reset submit text
        burgerInput.val('');
        
        // Send Post request to create new burger
        $.post({
            // Navigate to PUT URL
            url: '/api/burgers/',
            data: {"burger_name": newBurgerName},
            success: function(response) {
            //   Reload page
              location.reload();
            }
         });
    });
    
    // Event handler for delete button
    $('button.burgerDelete').on('click', function(event){
        var idToDelete = $(this).attr('data-id');
        // Send id from button to send put request to change devoured attribute
        $.ajax({
            // Navigate to PUT URL
            url: '/api/burgers/'+idToDelete,
            type: 'PUT',
            success: function(response) {
            //   Reload page
              location.reload();
            }
         });
    });

});