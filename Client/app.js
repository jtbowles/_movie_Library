(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Genre : this["genre"].value,
        	DirectorName : this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
                console.log("success");
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }
    $('#my-form').submit( processForm );
})(jQuery);

$(document).ready(function(){
    populateTable();
});

function populateTable(){
    $.ajax({
        url: 'https://localhost:44352/api/movie',
        dataType: 'json',
        type: 'get',
        async: true,
        data: JSON,
        success: function( data, textStatus, jQxhr ){
            $('#response pre').html( data );
            console.log("success");
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }

    })
}