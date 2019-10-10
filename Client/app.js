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
                //console.log("success");
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
                //var table = $('#movie-library');
                $('#my-form').after(textStatus);
                $('#response').append('<table id=\"movie-library\" class=\"table table-striped table-hover\"</table>');
                $('#movie-library').append('<tr>' + 
                    '<th>Title</th>' +
                    '<th>Director</th>' +
                    '<th>Genre</th>' +
                    '</tr>');

                // $.each(data, function(i , element){
                //     table.append(`<tr id="row${element.MovieId}">
                //     <td contenteditable id="title${element.MovieId}"'>${element.Title}
                //    </td><td contenteditable id="director${element.MovieId}">${element.Director}
                //    </td><td contenteditable id="genre${element.MovieId}">${element.Genre}</td>
                //    <td><button onclick="SubmitEdit(${element.MovieId})" class="btn btn-link"
                //    id="${element.MovieId}" type="submit">Update</button></td></tr>`)
                // });

                //console.log('success');

            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }


    $('#my-form').submit( processForm );
    $('#getmovies').on('click', populateMovieLibrary);
})(jQuery);







