// Document ready
$(document).ready(function(){
    console.log('connected');


    // Event handler for submit button (Create burger)
    
    
    // Event handler for delete button
    $('button.burgerDelete').on('click', function(event){
        var idToDelete = $(this).attr('data-id');
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