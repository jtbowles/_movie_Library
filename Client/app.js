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
                // remove the existing table to avoid duplicate tables
                //populateTable();
                $('#response pre').html( data );
                console.log("success");
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }


    function populateMovieLibrary(){
        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'get',
            async: true,
            data: JSON,
            success: function( data, textStatus, jQxhr ){
                console.log('success');

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }

        })
    }

    $('#get-movies').on('click', populateMovieLibrary());
    $('#my-form').submit( processForm );
})(jQuery);


