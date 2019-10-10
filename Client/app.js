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
            contentType: 'application/json',
            success: function( data, textStatus, jQxhr ){
                $('#my-form').after(textStatus);
                console.log('success');

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }

        })
    }

    $('#my-form').submit( processForm );
    $('#getmovies').on('click', populateMovieLibrary());
})(jQuery);


